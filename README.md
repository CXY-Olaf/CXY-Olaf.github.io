# Kailiang Cheng — 学术个人主页

[English summary](#english-summary) | [中文](#中文)

> **在线地址**: https://CXY-Olaf.github.io （部署后生效）

基于 [Astro](https://astro.build/) + TypeScript + Tailwind CSS 构建的双语学术个人主页。支持中英文切换、深色/浅色模式、响应式布局，可免费部署到 GitHub Pages。

---

## English Summary

A bilingual (EN/ZH) academic homepage built with Astro, TypeScript, and Tailwind CSS. Features:

- 🌐 Full Chinese/English bilingual support (URL-based: `/en/`, `/zh/`)
- 🌓 Dark/light mode (follows system, allows manual toggle)
- 📱 Responsive design (desktop, tablet, mobile)
- ⚡ Fast — pure static site, no heavy dependencies
- 📄 Pages: Home, About, Research, Publications, Projects, Notes/Blog, CV, Contact
- 🚀 Auto-deploy to GitHub Pages via GitHub Actions

See sections below for setup, customization, and deployment instructions.

---

## 技术栈

| 技术 | 说明 |
|------|------|
| [Astro 5](https://astro.build/) | 静态站点生成器 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Tailwind CSS 3](https://tailwindcss.com/) | 样式框架 |
| GitHub Pages | 免费托管 |
| GitHub Actions | 自动部署 |

---

## 本地运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

浏览器访问 `http://localhost:4321` 即可预览。

- 英文版：`http://localhost:4321/en/`
- 中文版：`http://localhost:4321/zh/`
- 根路径 `/` 会自动根据浏览器语言跳转到 `/en/` 或 `/zh/`

### 3. 构建

```bash
npm run build
```

构建产物在 `dist/` 目录中。

### 4. 预览构建结果

```bash
npm run preview
```

---

## 修改个人信息

大部分需要修改的信息集中在以下文件中：

### 个人资料 — `src/data/profile.ts`

```ts
const profile = {
  name: { en: 'Kailiang Cheng', zh: '程开良' },
  email: 'TODO',           // 替换为你的邮箱
  github: 'TODO',          // 替换为你的 GitHub 链接
  googleScholar: 'TODO',   // 替换为 Google Scholar 链接
  orcid: 'TODO',
  linkedin: 'TODO',
};
```

### 中英文文案 — `src/i18n/` 目录

- `src/i18n/en.ts` — 英文文案
- `src/i18n/zh.ts` — 中文文案

所有界面文本都集中在这两个文件中，直接修改即可。

### SEO / 页面元数据 — `astro.config.mjs`

```js
const SITE = 'https://CXY-Olaf.github.io'; // 改成你的
const BASE = '/';                           // 见下方说明
```

---

## 添加论文

编辑 `src/data/publications.ts`，按以下格式添加：

```ts
{
  title: {
    en: 'Your Paper Title',
    zh: '论文中文标题',
  },
  authors: 'Kailiang Cheng, Coauthor Name',
  venue: 'CVPR 2026',                         // 或 'Under Review' / 'Preprint'
  year: '2026',
  links: {
    paper: 'https://arxiv.org/abs/...',       // 留 '' 则不显示链接
    code: 'https://github.com/...',
    project: 'https://your-project-page.com',
  },
  tags: ['Diffusion Models', 'Image Editing'],
  abstract: {
    en: 'English abstract...',
    zh: '中文摘要...',
  },
},
```

---

## 添加项目

编辑 `src/data/projects.ts`，按以下格式添加：

```ts
{
  title: { en: 'My Project', zh: '我的项目' },
  description: { en: 'Description...', zh: '项目描述...' },
  tags: ['PyTorch', 'Diffusion'],
  github: 'https://github.com/...',
  demo: 'https://demo-link.com',
  status: 'in-progress',   // 'in-progress' | 'todo' | 'notes'
  slug: 'my-project',
},
```

---

## 添加博客 / 笔记

### 方式一：占位数据（快速添加）

编辑 `src/data/posts.ts`，按格式添加条目。

### 方式二：Markdown / MDX（推荐）

1. 在 `src/content/posts/` 目录下创建 `.md` 或 `.mdx` 文件
2. 使用 Astro Content Collections API 加载文章

> 当前项目使用 `src/data/posts.ts` 存储文章元数据。如需完整 Markdown 支持，可参考 [Astro Content Collections 文档](https://docs.astro.build/en/guides/content-collections/)。

---

## 替换头像

1. 将你的头像图片放入 `public/images/` 目录，例如 `public/images/avatar.jpg`
2. 编辑 `src/components/Hero.astro`，将 initials 占位区域替换为：

```astro
<img src="/images/avatar.jpg" alt="Kailiang Cheng" class="h-28 w-28 rounded-full object-cover ring-4 ring-accent-50" />
```

---

## 替换 CV PDF

1. 将你的简历 PDF 命名为 `cv.pdf`
2. 放入 `public/` 目录
3. CV 页面的下载按钮会自动链接到 `/cv.pdf`

---

## 部署到 GitHub Pages

### 用户主页部署（推荐）

如果你的仓库名为 `<username>.github.io`（例如 `CXY-Olaf.github.io`）：

1. 编辑 `astro.config.mjs`：

```js
const SITE = 'https://<username>.github.io';
const BASE = '/';
```

2. 推送到 `main` 分支，GitHub Actions 会自动部署。

### 项目主页部署

如果仓库名为 `homepage`（或其他名称）：

1. 编辑 `astro.config.mjs`：

```js
const SITE = 'https://<username>.github.io';
const BASE = '/homepage/';  // 改成你的仓库名
```

2. 推送到 `main` 分支。

### 启用 GitHub Pages

在 GitHub 仓库的 **Settings → Pages** 中：
- **Source**: GitHub Actions
- 确保 workflow 有写入权限

---

## 常见问题

### GitHub Pages 404 怎么办？

1. 检查 `astro.config.mjs` 中的 `SITE` 和 `BASE` 是否正确
2. 确认 GitHub Pages 已启用，Source 设置为 "GitHub Actions"
3. 查看 Actions 日志，确认 build 成功

### 图片路径不对怎么办？

- 所有静态资源放在 `public/` 目录
- 使用绝对路径引用：`/images/avatar.jpg`
- 项目主页部署时注意 `BASE` 路径前缀

### 中英文切换不生效怎么办？

- 语言切换通过 URL 路径实现（`/en/` ↔ `/zh/`）
- 确保 `astro.config.mjs` 中 `base` 设置正确
- 检查 i18n 文件 `src/i18n/en.ts` 和 `src/i18n/zh.ts` 是否完整

### GitHub Actions build 失败怎么办？

1. 检查 Node.js 版本是否 >= 18
2. 本地运行 `npm run build` 确认能通过
3. 查看 Actions 日志中的具体错误

### 如何绑定自定义域名？

1. 在 GitHub 仓库 **Settings → Pages → Custom domain** 中设置
2. 将 `astro.config.mjs` 中的 `SITE` 改为 `https://your-domain.com`
3. 在 `public/` 目录添加 `CNAME` 文件，内容为你的域名

---

## 项目结构

```
.
├── public/                  # 静态资源（直接复制到构建输出）
│   ├── favicon.svg          # 网站图标（KC initials）
│   ├── cv-placeholder.md    # CV PDF 占位说明
│   └── images/              # 图片（头像等）
├── src/
│   ├── components/          # UI 组件
│   │   ├── Navbar.astro     # 导航栏（含移动端菜单）
│   │   ├── Footer.astro     # 页脚
│   │   ├── Hero.astro       # 首屏
│   │   ├── About.astro      # 关于我
│   │   ├── Research.astro   # 研究方向（含卡片）
│   │   ├── ResearchCard.astro
│   │   ├── Publications.astro
│   │   ├── PublicationItem.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogCard.astro
│   │   ├── CV.astro         # CV 页面内容
│   │   ├── Contact.astro    # 联系方式
│   │   ├── Section.astro    # 通用 section 容器
│   │   ├── LanguageToggle.astro
│   │   └── ThemeToggle.astro
│   ├── data/                # 数据文件（论文、项目、博客）
│   │   ├── profile.ts       # 个人资料
│   │   ├── publications.ts  # 论文列表
│   │   ├── projects.ts      # 项目列表
│   │   └── posts.ts         # 博客列表
│   ├── i18n/                # 国际化文案
│   │   ├── en.ts            # 英文
│   │   ├── zh.ts            # 中文
│   │   └── index.ts         # 工具函数
│   ├── layouts/
│   │   └── BaseLayout.astro # 页面布局（head / nav / footer）
│   ├── pages/               # 路由页面
│   │   ├── index.astro      # 根路径 → 语言检测 + 跳转
│   │   └── [lang]/          # 语言页面
│   │       ├── index.astro  # 首页
│   │       ├── publications.astro
│   │       ├── projects.astro
│   │       ├── notes.astro  # 博客列表
│   │       ├── notes/[slug].astro  # 单篇文章
│   │       └── cv.astro
│   ├── styles/
│   │   └── global.css       # 全局样式 + Tailwind 自定义
│   └── utils/
│       ├── lang.ts          # 客户端语言工具
│       └── theme.ts         # 客户端主题工具
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
├── package.json
├── .gitignore
├── README.md                # 本文件
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages 自动部署
```

---

## 需要手动修改的 TODO

在 `src/data/profile.ts` 中：

- [ ] `email` — 替换为你的真实邮箱
- [ ] `github` — 替换为你的 GitHub 链接
- [ ] `googleScholar` — 替换或删除
- [ ] `orcid` — 替换或删除
- [ ] `linkedin` — 替换或删除

在 `astro.config.mjs` 中：

- [ ] `SITE` — 替换为你的 GitHub Pages 域名
- [ ] `BASE` — 如果是项目主页，改为 `/<repo-name>/`

在 `public/` 中：

- [ ] 放入你的 `cv.pdf` 简历文件

其他 TODO（可选）：

- [ ] `src/data/publications.ts` — 替换为真实论文
- [ ] `src/data/projects.ts` — 替换为真实项目
- [ ] `src/data/posts.ts` — 替换为真实博客文章
- [ ] `src/components/Hero.astro` — 替换 initials 为真实头像
- [ ] CV 页面中的 Skills / Experience / Awards 部分

---

## 后续维护建议

1. **论文更新**：有新论文时编辑 `src/data/publications.ts`
2. **博客更新**：在 `src/data/posts.ts` 添加条目；后续可迁移到 Markdown/MDX
3. **样式调色**：修改 `tailwind.config.mjs` 中的 `accent` 颜色即可全局生效
4. **文案修改**：所有文案在 `src/i18n/` 目录，直接编辑即可
5. **结构扩展**：在 `src/pages/[lang]/` 下新建 `.astro` 文件即可添加新页面

---

## 许可

MIT — 自由使用和修改。
