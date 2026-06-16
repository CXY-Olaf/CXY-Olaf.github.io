你现在是一个资深前端工程师、学术个人主页设计师和 GitHub Pages 部署专家。请你帮我从零开始创建一个可以免费部署到 GitHub Pages 的个人学术主页项目。这个主页需要适合研究生、AI/CV/生成模型方向研究者使用，整体风格要专业、简洁、现代、学术感强，不要太花哨，但要比传统教授主页更现代。

请你直接在当前工作目录中创建完整项目代码，项目必须可以本地运行、可以 build 成纯静态文件、可以通过 GitHub Pages 免费发布，不需要任何服务器、数据库、后端服务或付费平台。

一、技术选型要求

请优先使用 Astro 构建静态网站。如果你认为 Vite + React 更合适，也可以使用 Vite + React，但必须满足以下条件：

1. 最终网站必须是纯静态站点。
2. 可以部署到 GitHub Pages。
3. 支持中英文双语切换。
4. 支持响应式布局，电脑、平板、手机都能正常浏览。
5. 支持浅色 / 深色模式，默认跟随系统，也允许用户手动切换。
6. 页面加载要快，不要引入过重依赖。
7. 代码结构清晰，方便我以后自己维护。
8. 不要使用需要服务器的功能。
9. 不要使用需要登录、数据库或 API key 的功能。
10. 不要使用商业付费模板。

请使用 TypeScript。样式可以使用 Tailwind CSS，也可以使用普通 CSS / SCSS，但要求结构清晰、可维护。优先考虑 Tailwind CSS，因为后续修改方便。

二、个人信息背景

这个网站的主人是：

中文名：程开良
英文名：Kailiang Cheng
身份：硕士研究生
学校：中国科学技术大学，University of Science and Technology of China，USTC
本科：上海交通大学，Shanghai Jiao Tong University，SJTU
研究方向：人工智能、计算机视觉、生成模型、扩散模型、图像生成、图像编辑、可控生成、高效推理、Flow Matching、Optimal Transport、AI Infra
当前阶段：研究生一年级，有科研投稿经历，未来可能继续科研、实习、申博或求职。

请不要编造具体论文题目、导师姓名、实验室名称、获奖、邮箱、Google Scholar、ORCID、LinkedIn 等我没有明确给出的内容。对于暂时未知的信息，请用清晰的 TODO 占位符，方便我后续替换。

三、网站整体定位

请把这个网站设计成一个双语个人学术主页，目标访问者包括：

1. 潜在导师 / 合作者。
2. 实习面试官 / 企业研究员。
3. 同方向研究生。
4. 未来读博申请委员会。
5. 对我的技术博客和项目感兴趣的人。

网站需要传达的气质是：

1. 专业。
2. 清爽。
3. 稳重。
4. 有研究潜力。
5. 不浮夸。
6. 有清晰技术方向。
7. 中英文都自然，不要机器翻译腔。

四、页面结构

请实现以下页面或模块：

1. 首页 Home
2. 关于我 About
3. 研究方向 Research
4. 论文 Publications
5. 项目 Projects
6. 博客 / 笔记 Blog / Notes
7. 简历 CV
8. 联系方式 Contact

如果使用单页式 landing page，也可以把它们作为首页的 sections，但导航栏需要能跳转到对应区域。如果使用多页路由，也可以创建独立页面。优先推荐“首页包含核心 sections + Publications/Projects/Blog/CV 可独立页面”的结构。

五、中英文双语切换要求

这是核心要求。请认真实现，不要只做表面按钮。

需要支持：

1. 页面右上角有语言切换按钮：中文 / English。
2. 用户切换语言后，整个网站主要文本都切换。
3. URL 最好支持语言路径，例如：

   * `/zh/`
   * `/en/`
     或者：
   * `/`
   * `/en/`
     具体方案你可以选择，但要清楚实现。
4. 用户刷新页面后语言状态不丢失。
5. 默认语言可以根据浏览器语言判断；如果判断复杂，可以默认英文，但需要容易改成中文。
6. 中文页面和英文页面内容语义一致，但表达要自然，不要逐字直译。
7. 研究方向、项目、论文、博客标题都要能配置中英文。
8. 代码里要把双语文案集中管理，比如放在：

   * `src/i18n/zh.ts`
   * `src/i18n/en.ts`
   * 或 `src/data/profile.ts`
     请不要把所有文案散落在组件中。

六、导航栏要求

顶部导航栏包括：

中文模式：

* 首页
* 关于我
* 研究方向
* 论文
* 项目
* 笔记
* 简历
* 联系

英文模式：

* Home
* About
* Research
* Publications
* Projects
* Notes
* CV
* Contact

导航栏要求：

1. 桌面端横向导航。
2. 移动端有折叠菜单。
3. 页面滚动后导航栏可以保持固定或半透明吸顶。
4. 当前 section 或页面最好有高亮。
5. 右侧有语言切换和深色模式切换。

七、首页 Hero 区域

首页首屏需要包含：

1. 姓名：Kailiang Cheng / 程开良
2. 身份：Master’s Student at University of Science and Technology of China
3. 中文身份：中国科学技术大学硕士研究生
4. 简短研究定位：

英文建议文案：
I am interested in generative models, diffusion models, controllable image editing, efficient inference, and AI infrastructure for large-scale models.

中文建议文案：
我的研究兴趣包括生成模型、扩散模型、可控图像编辑、高效推理，以及面向大模型应用的 AI Infra 技术。

5. 按钮：

   * View CV / 查看简历
   * View Projects / 查看项目
   * Contact Me / 联系我

6. 可以有头像区域，但不要要求真实头像。请放一个优雅的占位头像或 initials “KC”。以后我可以替换成自己的照片。

7. 可以有一个小的 research tags 区域，例如：

   * Diffusion Models
   * Image Editing
   * Flow Matching
   * Optimal Transport
   * Efficient Inference
   * AI Infra

八、About 页面 / 模块

请写一个自然的中英文自我介绍。不要太夸张，不要像营销文案。可以参考以下内容：

中文：
我目前是中国科学技术大学硕士研究生，本科毕业于上海交通大学。我的研究兴趣集中在生成模型、扩散模型、图像生成与编辑、可控生成以及大模型高效推理等方向。我希望通过理论理解与系统实现的结合，探索更高效、更可控、更可靠的智能生成方法。

英文：
I am currently a master’s student at the University of Science and Technology of China. I received my bachelor’s degree from Shanghai Jiao Tong University. My research interests lie in generative models, diffusion models, image generation and editing, controllable generation, and efficient inference for large-scale AI systems. I am interested in combining theoretical insights with practical systems to build more efficient, controllable, and reliable generative methods.

请把这段作为初稿放进网站，但代码结构要允许我之后修改。

九、Research 研究方向模块

请设计成卡片形式，每个方向有标题、简短描述、关键词。需要中英文。

建议包括这些方向：

1. Diffusion Models and Generative Modeling
   中文：扩散模型与生成建模
   描述：研究扩散模型、Flow Matching、生成路径建模、采样器与生成质量之间的关系。

2. Image Editing and Controllable Generation
   中文：图像编辑与可控生成
   描述：研究如何在保持语义一致性和图像质量的同时，对生成过程进行精细控制。

3. Efficient Inference and AI Infrastructure
   中文：高效推理与 AI Infra
   描述：关注 LLM、VLM、扩散模型等大模型的推理加速、资源优化和工程落地。

4. Optimal Transport and Geometric Perspectives
   中文：最优传输与几何视角
   描述：探索最优传输、路径优化、几何结构在生成模型和图像编辑中的作用。

十、Publications 论文模块

目前不要编造真实论文。请创建一个数据结构，例如：

```ts
publications: [
  {
    title: {
      en: "Title Placeholder",
      zh: "论文标题占位符"
    },
    authors: "Kailiang Cheng, ...",
    venue: "Under Review / Preprint / TODO",
    year: "2026",
    links: {
      paper: "",
      code: "",
      project: ""
    },
    tags: ["Diffusion Models", "Image Editing"]
  }
]
```

页面显示时，如果没有真实论文，可以显示：

中文：
论文信息将稍后更新。

英文：
Publication information will be updated soon.

但请保留一个美观的 publications list 组件，方便后续添加。

十一、Projects 项目模块

请设计几个项目占位卡片，但明确标记为 TODO / Placeholder，不要伪造成已经完成的真实项目。建议项目方向：

1. Training-free Diffusion Image Editing
2. Frequency-aware Image Generation Notes
3. DPM-Solver++ and Diffusion Sampler Study
4. Efficient Inference for LLM/VLM/Diffusion Models
5. Flow Matching and Optimal Transport Notes

每个项目卡片包含：

1. 项目标题。
2. 中英文描述。
3. 技术标签。
4. GitHub 链接占位。
5. Demo / Project Page 链接占位。
6. 状态：In Progress / TODO / Notes

十二、Blog / Notes 模块

请实现博客 / 笔记列表结构。暂时可以放一些占位文章标题，但不要生成大量正文。每篇文章需要：

1. 标题中英文。
2. 日期。
3. 标签。
4. 摘要中英文。
5. slug。
6. 是否发布 published。

建议占位文章：

1. Understanding Classifier-Free Guidance in Diffusion Models
   中文：理解扩散模型中的 Classifier-Free Guidance

2. Notes on Flow Matching and Optimal Transport
   中文：Flow Matching 与最优传输学习笔记

3. DPM-Solver++ and Fast Sampling for Diffusion Models
   中文：DPM-Solver++ 与扩散模型快速采样

4. Frequency-domain Perspectives in Image Generation
   中文：图像生成中的频域视角

请实现列表页面；文章详情页面可以先做简单模板，显示标题、摘要、TODO 内容。代码结构要方便以后我用 Markdown / MDX 添加长文。优先支持 Markdown / MDX。

十三、CV 页面

请做一个 CV 页面，包含：

1. Education
2. Research Interests
3. Publications
4. Projects
5. Skills
6. Experience
7. Awards
8. Contact

对于未知内容使用 TODO。

教育经历已知：

英文：
M.S., University of Science and Technology of China, 202?–present
B.S., Shanghai Jiao Tong University, 202?–202?

中文：
硕士，中国科学技术大学，202?–至今
本科，上海交通大学，202?–202?

请不要编造具体年份。用 202? 占位。

CV 页面要支持一个“Download CV”按钮，但目前链接到 `/cv.pdf` 占位文件路径。请在 `public/` 目录下放一个 README 或 placeholder，说明用户可以把自己的简历 PDF 命名为 `cv.pdf` 放进去。

十四、Contact 联系方式模块

请包含：

1. Email：TODO
2. GitHub：TODO
3. Google Scholar：TODO
4. ORCID：TODO
5. LinkedIn：TODO
6. Location：Hefei, China / 合肥，中国，可以写成大致城市，不要写详细地址。

联系方式用占位符，不要编造具体链接。代码里要方便我替换。

十五、设计风格要求

整体视觉风格：

1. 干净、现代、留白充足。
2. 学术主页风格，但不要太古早。
3. 字体清晰，中文英文都好看。
4. 浅色模式背景可以是接近白色或非常浅的灰。
5. 深色模式背景要舒适，不要纯黑刺眼。
6. 主色调可以使用低饱和蓝色、靛蓝色或青色，但不要过于艳丽。
7. 卡片要有轻微边框、圆角、阴影或 hover 效果。
8. 代码要保证可访问性，按钮、链接、对比度合理。
9. 页面底部 footer 包含版权、最后更新时间、GitHub Pages 提示。
10. 不要堆叠太多动画。可以有轻微 hover transition。

十六、工程结构建议

请尽量使用类似结构：

```txt
.
├── public/
│   ├── favicon.svg
│   ├── cv.pdf 或 cv-placeholder.md
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.astro / Navbar.tsx
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro
│   │   ├── ResearchCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── PublicationItem.astro
│   │   ├── BlogCard.astro
│   │   ├── LanguageToggle.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   ├── profile.ts
│   │   ├── publications.ts
│   │   ├── projects.ts
│   │   └── posts.ts
│   ├── i18n/
│   │   ├── en.ts
│   │   ├── zh.ts
│   │   └── index.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── en/
│   │   │   ├── index.astro
│   │   │   ├── publications.astro
│   │   │   ├── projects.astro
│   │   │   ├── notes.astro
│   │   │   └── cv.astro
│   │   └── zh/
│   │       ├── index.astro
│   │       ├── publications.astro
│   │       ├── projects.astro
│   │       ├── notes.astro
│   │       └── cv.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── lang.ts
│       └── theme.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml
```

如果你选择的框架需要稍微不同的结构，也可以调整，但必须清晰解释。

十七、GitHub Pages 部署要求

请添加 GitHub Actions workflow，使得我 push 到 main 分支后自动部署到 GitHub Pages。

要求：

1. workflow 文件放在 `.github/workflows/deploy.yml`。
2. 支持 Node.js 安装依赖、build、上传 Pages artifact、deploy to GitHub Pages。
3. README 中写清楚：

   * 如何本地安装依赖。
   * 如何本地运行。
   * 如何 build。
   * 如何部署到 GitHub Pages。
   * GitHub 仓库应该怎么命名。
   * 如果是用户主页，仓库名可以是 `<username>.github.io`。
   * 如果是项目主页，如何设置 base path。
4. 如果 Astro 部署 GitHub Pages 需要设置 `site` 和 `base`，请在 README 中解释如何修改。
5. 请考虑两种部署方式：

   * 用户主页：`https://<username>.github.io/`
   * 项目主页：`https://<username>.github.io/<repo-name>/`
6. 请在配置文件里用清楚的 TODO 提醒我修改用户名和仓库名。

十八、README 要求

请写一个详细 README，中文为主，包含英文摘要。

README 至少包括：

1. 项目介绍。
2. 技术栈。
3. 本地运行步骤。
4. 修改个人信息的方法。
5. 修改中英文文案的方法。
6. 添加论文的方法。
7. 添加项目的方法。
8. 添加博客的方法。
9. 替换头像的方法。
10. 替换 CV PDF 的方法。
11. 部署到 GitHub Pages 的步骤。
12. 常见问题：

    * GitHub Pages 404 怎么办？
    * 图片路径不对怎么办？
    * 中英文切换不生效怎么办？
    * GitHub Actions build 失败怎么办？
    * 如何绑定自定义域名？
13. 后续维护建议。

十九、代码质量要求

请保证：

1. 项目可以 `npm install`。
2. 项目可以 `npm run dev`。
3. 项目可以 `npm run build`。
4. 项目可以 `npm run preview`。
5. TypeScript 无明显类型错误。
6. 所有 TODO 都集中、清楚，方便我改。
7. 不要留下无用示例代码。
8. 不要使用假的外链。
9. 不要暴露任何隐私信息。
10. 不要把真实邮箱写死，使用 TODO 占位。
11. 组件命名清晰。
12. 样式不要混乱。
13. 注意中文换行和英文排版。
14. 页面 title、description、meta tags 要有中英文对应。
15. 加入 Open Graph 基础信息，方便链接分享。
16. 加入 favicon，可以用简单 SVG initials “KC”。

二十、内容语气要求

中文文案要自然、克制、专业，不要像广告。英文文案要自然地道，不要中式英语。研究方向描述可以稍微有学术感，但不要吹得太满。

不要写：
“我是一名杰出的人工智能科学家”
“我致力于改变世界”
“我在多个领域取得突破性成果”

可以写：
“我关注生成模型的可控性、高效性与可靠性。”
“I am interested in controllable, efficient, and reliable generative modeling.”

二十一、请最终交付

请直接创建项目，并在完成后告诉我：

1. 你使用了什么技术栈。
2. 项目目录结构。
3. 如何本地运行。
4. 如何修改个人信息。
5. 如何添加论文 / 项目 / 笔记。
6. 如何部署到 GitHub Pages。
7. 我需要手动修改哪些 TODO。
8. 如果我把仓库命名为 `<my-github-username>.github.io`，需要怎么设置。
9. 如果我把仓库命名为 `homepage`，需要怎么设置 base path。

请你不要只给建议，而是直接实现完整代码。
