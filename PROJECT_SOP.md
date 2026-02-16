# Lion Finance 项目 SOP（TG 群：-1003741404710）

> 项目定位：Lion Finance 官网（Next.js）+ AI 咨询助手 + Google SEO。
> 沟通原则：1 项目 = 1 群；群内按 **A 模式**（只在：需要确认 / 可验收完成 / 阻塞风险 三类事件发言）。

---

## 0. 基本信息（固定）
- **ProjectId**：`lionfinance`
- **TG 群**：`-1003741404710`
- **仓库**：https://github.com/daddyRay0804/lionfinancetest.git
- **线上域名**：https://lionfinance.co.nz
- **部署**：Vercel（绑定自有域名）

---

## 1. 角色与边界
### 1.1 我（OpenClaw/助手）负责
- 需求澄清 → 拆解任务 → 输出可验收 checklist
- 小步改动（可回滚）→ 本地 lint/build 通过 → commit/push
- 只在关键事件发言（见第 2 节）

### 1.2 你（菠菜爸爸）负责
- 给出验收口径（什么算“上线可用”）
- Vercel 环境变量配置（密钥只放 Vercel，不在聊天发）
- GSC 操作（当我明确说“可以去 GSC 了”再做一次性提交/刷新）

---

## 2. 群内发言规则（A 模式）
我只在以下 3 类事件发言：
1) **需要确认**：口径/改动范围/上线策略/风险选择
2) **阶段完成可验收**：附“变更点 + 如何验证 + 结果”
3) **阻塞/风险**：明确原因 + 给出 2-3 个可选方案

> 禁止：无进展刷屏、无意义“我已收到”。

---

## 3. 播报开关（群内指令）
- 开启固定格式进度播报：`播报项目` 或 `播报项目 lionfinance`
- 关闭固定格式进度播报：`不播报项目` 或 `不播报项目 lionfinance`
- 手动立刻播报一次：`播报一次`

说明：关闭“进度播报”后，仍保留第 2 节三类关键提醒。

---

## 4. 工作流（默认）
### 4.1 变更流程（强制）
1) 明确改动目标（1-3 条）
2) 本地实现
3) `npm run lint` + `npm run build` 必须通过
4) `git commit`（单主题）+ `git push`
5) 在群里发“可验收完成”消息（只报结论 + 验证方式）

### 4.2 PR/提交规范
- commit message：`seo:` / `feat(ai):` / `fix:` / `chore:` 前缀
- 禁止提交：密钥、个人隐私、构建产物（除非明确需要）

---

## 5. SEO 专项 SOP（Google 视角）
### 5.1 代码侧（已建立基线）
- canonical + hreflang（en/zh/kr + x-default）
- sitemap/robots
- 结构化数据：FinancialService（含地址/联系人）
- 产品页：关键词化 meta description + OG/Twitter image
- 法律页：非英文 noindex（避免重复内容）
- 图标：favicon + apple-touch-icon

### 5.2 上线后（只做一次性动作）
- 确认 Vercel Production 已部署到最新 main
- GSC：提交 sitemap + 对 en/zh/kr 首页 Request indexing
- 48–72 小时后看：Indexing/Pages 的重复与收录情况

---

## 6. AI 助手 SOP（DeepSeek 官方）
### 6.1 开关策略
- `AI_MODE=bot`：0 token 规则客服（FAQ/意图/转人工）
- `AI_MODE=llm`：启用 LLM（DeepSeek 官方）

### 6.2 Vercel 环境变量（LLM 模式）
- `AI_MODE=llm`
- `LLM_PROVIDER=deepseek`
- `DEEPSEEK_API_KEY=...`（只放 Vercel）
- 可选：`DEEPSEEK_MODEL=deepseek-chat`

### 6.3 质量要求
- 默认回答**极简**（1–2 句优先）
- 不编利率/费用/审批承诺；需要报价时转人工联系方式

---

## 7. 资产与文档约定
- 需求/验收口径：优先写在仓库（避免群聊丢失）
- 重要决策：在群里留痕 + 同步到 `PROJECT_SOP.md` 的“变更记录”

---

## 8. 变更记录（维护）
- 2026-02：完成 SEO 基线（canonical/hreflang/schema/sitemap/OG/icons）并接入 DeepSeek 官方 LLM provider（保留 bot 模式）。
