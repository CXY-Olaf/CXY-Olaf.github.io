/**
 * 中文本地化文案，用于学术个人主页。
 * 所有界面文字集中于此，修改方便。
 */
import type { Translations } from './en';

const zh: Translations = {
  // ── 网站元数据 ──────────────────────────────────────────────────────
  site: {
    title: '程开良 — 学术个人主页',
    description:
      '程开良 — 中国科学技术大学硕士研究生。研究方向：生成模型、扩散模型、图像编辑、高效推理、AI Infra。',
    lang: 'zh',
  },

  // ── 导航 ────────────────────────────────────────────────────────────
  nav: {
    home: '首页',
    about: '关于我',
    research: '研究方向',
    publications: '论文',
    projects: '项目',
    notes: '笔记',
    cv: '简历',
    contact: '联系',
  },

  // ── 首屏 Hero ───────────────────────────────────────────────────────
  hero: {
    greeting: '你好，我是',
    name: '程开良',
    subtitle: '中国科学技术大学 硕士研究生',
    bio: '我的研究兴趣包括生成模型、扩散模型、可控图像编辑、高效推理，以及面向大模型应用的 AI Infra 技术。',
    cvButton: '查看简历',
    projectsButton: '查看项目',
    contactButton: '联系我',
    initials: '程',
  },

  // ── 关于我 ──────────────────────────────────────────────────────────
  about: {
    heading: '关于我',
    paragraph1:
      '我目前是中国科学技术大学（USTC）硕士研究生，本科毕业于上海交通大学（SJTU）。',
    paragraph2:
      '我的研究兴趣集中在生成模型、扩散模型、图像生成与编辑、可控生成以及大模型高效推理等方向。',
    paragraph3:
      '我希望通过理论理解与系统实现的结合，探索更高效、更可控、更可靠的智能生成方法。',
  },

  // ── 研究方向 ────────────────────────────────────────────────────────
  research: {
    heading: '研究方向',
    directions: [
      {
        title: '扩散模型与生成建模',
        description:
          '研究扩散模型、Flow Matching、生成路径建模，以及采样器与生成质量之间的关系。',
        keywords: ['扩散模型', 'Flow Matching', '生成建模', 'SDE/ODE 采样器'],
      },
      {
        title: '图像编辑与可控生成',
        description:
          '探索如何在保持语义一致性和图像质量的同时，对生成过程进行精细控制。',
        keywords: ['图像编辑', '可控生成', '语义一致性', '免训练方法'],
      },
      {
        title: '高效推理与 AI Infra',
        description:
          '关注 LLM、VLM、扩散模型等大模型的推理加速、资源优化和工程落地。',
        keywords: ['高效推理', '模型优化', 'LLM/VLM 部署', 'AI Infra'],
      },
      {
        title: '最优传输与几何视角',
        description:
          '探索最优传输、路径优化、几何结构在生成模型和图像编辑中的作用。',
        keywords: ['最优传输', '几何深度学习', '路径优化', 'Wasserstein 距离'],
      },
    ],
  },

  // ── 论文 ────────────────────────────────────────────────────────────
  publications: {
    heading: '论文',
    empty: '论文信息将稍后更新。',
    authorsLabel: '作者',
    venueLabel: '发表',
    paper: '论文',
    code: '代码',
    project: '项目页面',
  },

  // ── 项目 ────────────────────────────────────────────────────────────
  projects: {
    heading: '项目',
    github: 'GitHub',
    demo: '演示',
    status: {
      inProgress: '进行中',
      todo: '待开始',
      notes: '学习笔记',
    },
  },

  // ── 博客 / 笔记 ─────────────────────────────────────────────────────
  blog: {
    heading: '博客与笔记',
    readMore: '阅读全文 →',
    published: '发布于',
    tags: '标签',
    empty: '博客文章即将更新。',
    backToList: '← 返回笔记列表',
    tocHeading: '目录',
  },

  // ── 简历 ────────────────────────────────────────────────────────────
  cv: {
    heading: '个人简历',
    download: '下载简历 (PDF)',
    downloadTip: '请将简历 PDF 放在 public/cv.pdf。当前链接为占位。',
    education: '教育经历',
    researchInterests: '研究方向',
    publications: '论文发表',
    projects: '项目经历',
    skills: '技能',
    experience: '经历',
    awards: '获奖',
    contact: '联系方式',
    educationItems: [
      {
        degree: '人工智能 硕士',
        school: '中国科学技术大学（USTC）',
        period: '202? – 至今',
        notes: '',
      },
      {
        degree: '计算机科学 学士',
        school: '上海交通大学（SJTU）',
        period: '202? – 202?',
        notes: '',
      },
    ],
    todo: '待补充',
  },

  // ── 联系方式 ────────────────────────────────────────────────────────
  contact: {
    heading: '联系方式',
    email: '邮箱',
    github: 'GitHub',
    scholar: 'Google Scholar',
    orcid: 'ORCID',
    linkedin: 'LinkedIn',
    location: '所在地',
    locationValue: '中国 · 合肥',
    placeholder: '待补充',
  },

  // ── 页脚 ────────────────────────────────────────────────────────────
  footer: {
    copyright: '© 2026 程开良',
    builtWith: '基于 Astro 和 Tailwind CSS 构建，托管于 GitHub Pages。',
    lastUpdated: '最后更新',
  },

  // ── 语言切换 ────────────────────────────────────────────────────────
  language: {
    label: '语言',
    zh: '中文',
    en: 'English',
  },

  // ── 主题切换 ────────────────────────────────────────────────────────
  theme: {
    light: '浅色',
    dark: '深色',
    system: '跟随系统',
  },

  // ── 通用 ────────────────────────────────────────────────────────────
  common: {
    allRightsReserved: '保留所有权利。',
    notFound: '页面未找到。',
    backHome: '返回首页',
  },

  // ── 元数据 ──────────────────────────────────────────────────────────
  meta: {
    homeTitle: '程开良 — 学术个人主页',
    homeDescription:
      '程开良 — 中国科学技术大学硕士研究生。研究方向：生成模型、扩散模型、图像编辑、高效推理。',
    publicationsTitle: '论文 — 程开良',
    publicationsDescription: '程开良的论文与预印本。',
    projectsTitle: '项目 — 程开良',
    projectsDescription: '程开良的研究与个人项目。',
    notesTitle: '笔记与博客 — 程开良',
    notesDescription: '关于生成模型、扩散模型与 AI 的技术笔记与博客。',
    cvTitle: '简历 — 程开良',
    cvDescription: '程开良的个人简历。',
  },
};

export default zh;
