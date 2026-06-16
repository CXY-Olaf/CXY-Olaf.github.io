/**
 * Blog / Notes posts data.
 *
 * TODO: Add your real blog posts.
 * For full articles, create Markdown/MDX files in src/content/posts/
 * and update this list to reference their slugs.
 *
 * Each post:
 *  - slug: URL-friendly identifier (used in /en/notes/slug and /zh/notes/slug)
 *  - published: set to false to hide the post
 *  - externalUrl: if set, the "read more" link goes to an external URL instead
 */

export interface Post {
  slug: string;
  title: { en: string; zh: string };
  date: string; // ISO date string, e.g. "2026-06-01"
  tags: string[];
  summary: { en: string; zh: string };
  published: boolean;
  externalUrl?: string;
}

const posts: Post[] = [
  {
    slug: 'understanding-cfg',
    title: {
      en: 'Understanding Classifier-Free Guidance in Diffusion Models',
      zh: '理解扩散模型中的 Classifier-Free Guidance',
    },
    date: '2026-06-01',
    tags: ['Diffusion Models', 'CFG', 'Theory'],
    summary: {
      en: 'A deep dive into classifier-free guidance — how it works, why it improves sample quality, and its theoretical connections to score-based models.',
      zh: '深入探讨 Classifier-Free Guidance 的原理、为何能提升采样质量以及与 score-based 模型的理论联系。',
    },
    published: true,
  },
  {
    slug: 'flow-matching-ot-notes',
    title: {
      en: 'Notes on Flow Matching and Optimal Transport',
      zh: 'Flow Matching 与最优传输学习笔记',
    },
    date: '2026-05-15',
    tags: ['Flow Matching', 'Optimal Transport', 'Notes'],
    summary: {
      en: 'Personal notes on flow matching, rectified flow, and their connections to optimal transport theory. Includes intuitive explanations and key derivations.',
      zh: '关于 Flow Matching 和 Rectified Flow 的学习笔记，涵盖与最优传输理论的联系、直观解释与关键推导。',
    },
    published: true,
  },
  {
    slug: 'dpm-solver-fast-sampling',
    title: {
      en: 'DPM-Solver++ and Fast Sampling for Diffusion Models',
      zh: 'DPM-Solver++ 与扩散模型快速采样',
    },
    date: '2026-04-20',
    tags: ['Diffusion Models', 'Sampling', 'ODE'],
    summary: {
      en: 'An overview of DPM-Solver++, UniPC, and other fast ODE solvers for diffusion models. Covers the math, implementation tricks, and practical comparisons.',
      zh: '概览 DPM-Solver++、UniPC 等快速 ODE 求解器在扩散模型中的应用，涵盖数学原理、实现技巧与实践对比。',
    },
    published: true,
  },
  {
    slug: 'frequency-domain-generation',
    title: {
      en: 'Frequency-domain Perspectives in Image Generation',
      zh: '图像生成中的频域视角',
    },
    date: '2026-03-10',
    tags: ['Image Generation', 'Frequency Analysis', 'Notes'],
    summary: {
      en: 'Exploring how frequency-domain analysis can shed light on the behavior of generative models — from spectral biases to wavelet-based architectures.',
      zh: '探索频域分析如何揭示生成模型的行为特性——从频谱偏置到基于小波的网络架构。',
    },
    published: true,
  },
];

export default posts;
