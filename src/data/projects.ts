/**
 * Projects data.
 *
 * TODO: Replace placeholder entries with your real projects.
 * status: 'in-progress' | 'todo' | 'notes'
 */

export type ProjectStatus = 'in-progress' | 'todo' | 'notes';

export interface Project {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  tags: string[];
  github: string;
  demo: string;
  status: ProjectStatus;
  slug: string;
}

const projects: Project[] = [
  {
    title: {
      en: 'Training-free Diffusion Image Editing',
      zh: '免训练扩散模型图像编辑',
    },
    description: {
      en: 'Exploring training-free methods for controllable image editing with diffusion models — investigating attention manipulation, feature injection, and cross-attention control.',
      zh: '探索基于扩散模型的免训练可控图像编辑方法——研究注意力操控、特征注入与交叉注意力控制技术。',
    },
    tags: ['Diffusion Models', 'Image Editing', 'PyTorch'],
    github: 'TODO',
    demo: 'TODO',
    status: 'in-progress',
    slug: 'training-free-diffusion-editing',
  },
  {
    title: {
      en: 'Frequency-aware Image Generation Notes',
      zh: '频域感知图像生成笔记',
    },
    description: {
      en: 'Study notes on frequency-domain analysis of generative models — from FFT priors to wavelet-based generation and spectral loss design.',
      zh: '生成模型频域分析的学习笔记——从 FFT 先验到基于小波的生成方法及频谱损失函数设计。',
    },
    tags: ['Frequency Analysis', 'Image Generation', 'Notes'],
    github: 'TODO',
    demo: 'TODO',
    status: 'notes',
    slug: 'frequency-aware-generation-notes',
  },
  {
    title: {
      en: 'DPM-Solver++ and Diffusion Sampler Study',
      zh: 'DPM-Solver++ 与扩散采样器研究',
    },
    description: {
      en: 'Reproducing and benchmarking fast ODE/SDE solvers for diffusion models (DPM-Solver++, UniPC, DEIS) across different model architectures and noise schedules.',
      zh: '复现与评测扩散模型的快速 ODE/SDE 求解器（DPM-Solver++、UniPC、DEIS），比较不同模型架构与噪声调度下的表现。',
    },
    tags: ['Diffusion Models', 'Fast Sampling', 'Reproducibility'],
    github: 'TODO',
    demo: 'TODO',
    status: 'in-progress',
    slug: 'dpm-solver-study',
  },
  {
    title: {
      en: 'Efficient Inference for LLM/VLM/Diffusion Models',
      zh: '大模型高效推理实战',
    },
    description: {
      en: 'Hands-on exploration of inference optimization techniques — KV-cache, quantization (GPTQ/AWQ), speculative decoding, TensorRT-LLM, and diffusion model distillation.',
      zh: '动手实践推理优化技术——KV-cache、量化（GPTQ/AWQ）、推测解码、TensorRT-LLM 以及扩散模型蒸馏。',
    },
    tags: ['LLM', 'Inference', 'Quantization', 'TensorRT'],
    github: 'TODO',
    demo: 'TODO',
    status: 'in-progress',
    slug: 'efficient-inference-exploration',
  },
  {
    title: {
      en: 'Flow Matching & Optimal Transport Notes',
      zh: 'Flow Matching 与最优传输笔记',
    },
    description: {
      en: 'Comprehensive study notes on flow matching, rectified flow, and connections to optimal transport theory — with code demos and visualizations.',
      zh: '关于 Flow Matching、Rectified Flow 及其与最优传输理论关联的系统学习笔记，包含代码示例与可视化。',
    },
    tags: ['Flow Matching', 'Optimal Transport', 'Notes'],
    github: 'TODO',
    demo: 'TODO',
    status: 'notes',
    slug: 'flow-matching-ot-notes',
  },
];

export default projects;
