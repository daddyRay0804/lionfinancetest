# Lion Finance — 官方网站

新西兰贷款经纪公司 Lion Finance 的官方网站，支持英文 / 中文 / 韩文，SEO 友好。

## 功能概览

- **多语言**：通过 URL 路径切换 `en` / `zh` / `kr`（如 `/en`、`/zh/about`、`/kr/products/home-loans`）
- **SEO**：每页独立 meta、h1–h3 层级、sitemap、robots、图标（`/icon.svg`），建议在 `public/` 下放置 `favicon.ico` 和 `apple-touch-icon.png`
- **页面**：首页、7 大产品页、About Us、Team、FAQ、客户反馈区块
- **右下角 AI 咨询助手**：流式输出模拟，可后续接入真实 API

## 产品结构

1. Home Loans  
2. Construction Loans  
3. Business Loans  
4. Commercial Loans  
5. Refinance  
6. Top-up  
7. Interest Rate Refix  

## 本地环境配置与运行（验收用）

### 前置条件

- **Node.js 18+** 与 **npm** 已安装并加入系统 PATH（[下载](https://nodejs.org/)）。

### 方式一：命令行

```bash
cd c:\Users\Administrator\Desktop\Lionfinance
npm install
npm run dev
```

### 方式二：脚本启动（Windows）

- **批处理**：双击 `scripts\run-dev.bat`（会检测 Node、自动安装依赖并打开浏览器）。
- **PowerShell**：在项目根目录执行 `.\scripts\run-dev.ps1`。

### 验收地址

- 打开浏览器访问：**http://localhost:3000/en**（根路径会重定向到 `/en`）。
- 可切换语言：**EN | 中文 | 한국어**，或直接访问 `/zh`、`/kr`。

## 构建与部署

```bash
npm run build
npm start
```

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## 图标与 SEO

- 站点图标：`src/app/icon.svg` 已配置；可将 `favicon.ico`、`apple-touch-icon.png` 放入 `public/` 以覆盖或补充
- 多语言：建议在生产环境为各页配置 `alternates.languages`（en/zh/kr）以完善 hreflang

## UI 设计与素材占位

- **设计待办**：见 [DESIGN.md](./DESIGN.md)，含 Logo/Hero 占位说明及对新西兰客户的设计 todolist。
- **Logo**：当前为文字 + “L” 图标框占位，正式 Logo 放入 `public/logo.svg` 后可在 Header 中替换。
- **Hero 图**：首页 Hero 区为占位，正式图放入 `public/hero.jpg` 后可在首页替换占位组件。
