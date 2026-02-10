export type Lang = "en" | "zh" | "kr";

export const LANGUAGES: { code: Lang; label: string; locale: string }[] = [
  { code: "en", label: "English", locale: "en-NZ" },
  { code: "zh", label: "中文", locale: "zh-CN" },
  { code: "kr", label: "한국어", locale: "ko-KR" },
];

export const DEFAULT_LANG: Lang = "en";

export function isValidLang(lang: string): lang is Lang {
  return ["en", "zh", "kr"].includes(lang);
}
