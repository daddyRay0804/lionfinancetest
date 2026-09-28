"""Validate SEO against a running production build: python3 scripts/check-seo.py URL."""
import json
import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from urllib.parse import urlsplit

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"
CANONICAL = "https://lionfinance.co.nz"


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.tags = []
        self.title = ""
        self.in_title = False
        self.in_json = False
        self.json_text = ""
        self.schemas = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == "title":
            self.in_title = True
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.in_json = True
            self.json_text = ""

    def handle_data(self, text):
        if self.in_title:
            self.title += text
        if self.in_json:
            self.json_text += text

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.in_json:
            self.schemas.append(json.loads(self.json_text))
            self.in_json = False

    def meta(self, key):
        return next((a.get("content") for t, a in self.tags if t == "meta" and (a.get("name") == key or a.get("property") == key)), None)


def fetch(path):
    with urllib.request.urlopen(BASE.rstrip("/") + path, timeout=30) as response:
        assert response.status == 200, path
        return response.read().decode()


root = ET.fromstring(fetch("/sitemap.xml"))
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}
urls = [entry.find("s:loc", ns).text for entry in root]
assert len(urls) == len(set(urls)) == 103, "Unexpected sitemap URLs"
assert not any("/admin" in u or "/login" in u or u.endswith(("/zh/terms", "/kr/terms")) for u in urls)
titles = set()
for entry, url in zip(root, urls):
    path = urlsplit(url).path
    lang = path.split("/")[1]
    page = Page(fetch(path))
    assert page.title and page.title.count("Lion Finance") == 1, (path, page.title)
    assert page.title not in titles, (path, "duplicate title")
    titles.add(page.title)
    assert sum(t == "h1" for t, _ in page.tags) == 1, (path, "h1")
    assert page.meta("description"), (path, "description")
    assert "noindex" not in (page.meta("robots") or ""), (path, "noindex")
    assert next(a["lang"] for t, a in page.tags if t == "html") == {"en": "en", "zh": "zh-CN", "kr": "ko"}[lang], (path, "html language")
    assert [a["href"] for t, a in page.tags if t == "link" and a.get("rel") == "canonical"] == [url], (path, "canonical")
    alternates = {a["hreflang"]: a["href"] for t, a in page.tags if t == "link" and a.get("rel") == "alternate"}
    expected = {"en", "x-default"} if path.endswith("/terms") else {"en", "zh", "ko", "x-default"}
    assert set(alternates) == expected, (path, alternates)
    assert alternates == {a.attrib["hreflang"]: a.attrib["href"] for a in entry.findall("x:link", ns)}, (path, "sitemap alternates")
    assert all(u in urls for u in alternates.values()), (path, "alternate not indexable")
    assert page.meta("og:url") == url, (path, "og:url")
    assert page.meta("og:locale") == {"en": "en_NZ", "zh": "zh_CN", "kr": "ko_KR"}[lang]
    assert page.meta("og:image") and page.meta("twitter:image"), (path, "share image")
    assert page.meta("twitter:description") == page.meta("description"), (path, "twitter description")
    for tag, attrs in page.tags:
        if tag == "a" and attrs.get("href", "").startswith("/"):
            assert "//" not in attrs["href"], (path, attrs["href"])
    if "/products/" in path:
        assert any(s.get("@type") == "BreadcrumbList" for s in page.schemas), (path, "breadcrumbs")
    print("PASS", path)

for path in ["/login", "/zh/terms", "/kr/terms"]:
    assert "noindex" in Page(fetch(path)).meta("robots"), path
for path in ["/en/not-a-page", "/en/products/not-a-product", "/en/blog/not-an-article", "/zh/blog/not-an-article", "/kr/blog/not-an-article", "/fr"]:
    try:
        fetch(path)
        raise AssertionError((path, "Expected 404"))
    except urllib.error.HTTPError as error:
        assert error.code == 404, (path, error.code)
assert CANONICAL + "/sitemap.xml" in fetch("/robots.txt")
print("PASS: 103 sitemap pages, noindex pages, invalid routes, and robots.txt")
