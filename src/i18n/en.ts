/**
 * English translations for the academic homepage.
 * All UI text is centralized here — edit freely.
 */
const en = {
  // ── Site metadata ──────────────────────────────────────────────────────
  site: {
    title: 'Kailiang Cheng — Academic Homepage',
    description:
      'Kailiang Cheng — Master\'s student at USTC. Research interests: generative models, diffusion models, image editing, efficient inference, AI Infra.',
    lang: 'en',
  },

  // ── Navigation ─────────────────────────────────────────────────────────
  nav: {
    home: 'Home',
    about: 'About',
    research: 'Research',
    publications: 'Publications',
    projects: 'Projects',
    notes: 'Notes',
    cv: 'CV',
    contact: 'Contact',
  },

  // ── Hero ───────────────────────────────────────────────────────────────
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Kailiang Cheng',
    subtitle:
      'Master\'s Student at University of Science and Technology of China',
    bio: 'I am interested in generative models, diffusion models, controllable image editing, efficient inference, and AI infrastructure for large-scale models.',
    cvButton: 'View CV',
    projectsButton: 'View Projects',
    contactButton: 'Contact Me',
    initials: 'KC',
  },

  // ── About ──────────────────────────────────────────────────────────────
  about: {
    heading: 'About Me',
    paragraph1:
      'I am currently a master\'s student at the University of Science and Technology of China (USTC). I received my bachelor\'s degree from Shanghai Jiao Tong University (SJTU).',
    paragraph2:
      'My research interests lie in generative models, diffusion models, image generation and editing, controllable generation, and efficient inference for large-scale AI systems.',
    paragraph3:
      'I am interested in combining theoretical insights with practical systems to build more efficient, controllable, and reliable generative methods.',
  },

  // ── Research ───────────────────────────────────────────────────────────
  research: {
    heading: 'Research Directions',
    directions: [
      {
        title: 'Diffusion Models & Generative Modeling',
        description:
          'Studying diffusion models, flow matching, generative path modeling, and the relationship between samplers and generation quality.',
        keywords: [
          'Diffusion Models',
          'Flow Matching',
          'Generative Modeling',
          'SDE/ODE Samplers',
        ],
      },
      {
        title: 'Image Editing & Controllable Generation',
        description:
          'Investigating how to achieve fine-grained control over the generative process while maintaining semantic consistency and image quality.',
        keywords: [
          'Image Editing',
          'Controllable Generation',
          'Semantic Consistency',
          'Training-free Methods',
        ],
      },
      {
        title: 'Efficient Inference & AI Infrastructure',
        description:
          'Focused on inference acceleration, resource optimization, and engineering deployment of large models including LLMs, VLMs, and diffusion models.',
        keywords: [
          'Efficient Inference',
          'Model Optimization',
          'LLM/VLM Serving',
          'AI Infra',
        ],
      },
      {
        title: 'Optimal Transport & Geometric Perspectives',
        description:
          'Exploring the role of optimal transport, path optimization, and geometric structures in generative models and image editing.',
        keywords: [
          'Optimal Transport',
          'Geometric Deep Learning',
          'Path Optimization',
          'Wasserstein Distance',
        ],
      },
    ],
  },

  // ── Publications ───────────────────────────────────────────────────────
  publications: {
    heading: 'Publications',
    empty: 'Publication information will be updated soon.',
    authorsLabel: 'Authors',
    venueLabel: 'Venue',
    paper: 'Paper',
    code: 'Code',
    project: 'Project Page',
  },

  // ── Projects ───────────────────────────────────────────────────────────
  projects: {
    heading: 'Projects',
    github: 'GitHub',
    demo: 'Demo',
    status: {
      inProgress: 'In Progress',
      todo: 'TODO',
      notes: 'Notes',
    },
  },

  // ── Blog / Notes ───────────────────────────────────────────────────────
  blog: {
    heading: 'Blog & Notes',
    readMore: 'Read more →',
    published: 'Published',
    tags: 'Tags',
    empty: 'Blog posts coming soon.',
    backToList: '← Back to Notes',
    tocHeading: 'On this page',
  },

  // ── CV ─────────────────────────────────────────────────────────────────
  cv: {
    heading: 'Curriculum Vitae',
    download: 'Download CV (PDF)',
    downloadTip:
      'Place your CV PDF at public/cv.pdf. Current link is a placeholder.',
    education: 'Education',
    researchInterests: 'Research Interests',
    publications: 'Publications',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    awards: 'Awards',
    contact: 'Contact',
    educationItems: [
      {
        degree: 'M.S. in Artificial Intelligence',
        school: 'University of Science and Technology of China (USTC)',
        period: '202? – present',
        notes: '',
      },
      {
        degree: 'B.S. in Computer Science',
        school: 'Shanghai Jiao Tong University (SJTU)',
        period: '202? – 202?',
        notes: '',
      },
    ],
    todo: 'TODO',
  },

  // ── Contact ────────────────────────────────────────────────────────────
  contact: {
    heading: 'Contact',
    email: 'Email',
    github: 'GitHub',
    scholar: 'Google Scholar',
    orcid: 'ORCID',
    linkedin: 'LinkedIn',
    location: 'Location',
    locationValue: 'Hefei, China',
    placeholder: 'TODO',
  },

  // ── Footer ─────────────────────────────────────────────────────────────
  footer: {
    copyright: '© 2026 Kailiang Cheng',
    builtWith: 'Built with Astro & Tailwind CSS. Hosted on GitHub Pages.',
    lastUpdated: 'Last updated',
  },

  // ── Language selector ──────────────────────────────────────────────────
  language: {
    label: 'Language',
    zh: '中文',
    en: 'English',
  },

  // ── Theme toggle ───────────────────────────────────────────────────────
  theme: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },

  // ── Common ─────────────────────────────────────────────────────────────
  common: {
    allRightsReserved: 'All rights reserved.',
    notFound: 'Page not found.',
    backHome: 'Back to Home',
  },

  // ── Metadata ───────────────────────────────────────────────────────────
  meta: {
    homeTitle: 'Kailiang Cheng — Academic Homepage',
    homeDescription:
      'Kailiang Cheng — Master\'s student at USTC. Research in generative models, diffusion models, image editing, efficient inference.',
    publicationsTitle: 'Publications — Kailiang Cheng',
    publicationsDescription:
      'Publications and preprints by Kailiang Cheng.',
    projectsTitle: 'Projects — Kailiang Cheng',
    projectsDescription: 'Research and side projects by Kailiang Cheng.',
    notesTitle: 'Notes & Blog — Kailiang Cheng',
    notesDescription:
      'Technical notes and blog posts on generative models, diffusion, and AI.',
    cvTitle: 'CV — Kailiang Cheng',
    cvDescription: 'Curriculum Vitae of Kailiang Cheng.',
  },
};

export default en;
export type Translations = typeof en;
