/**
 * Publications data.
 *
 * TODO: Replace with your real publications.
 * Each entry has bilingual title/abstract; links default to empty strings
 * (no link is rendered when the value is empty).
 */

export interface PublicationLink {
  paper: string;
  code: string;
  project: string;
}

export interface Publication {
  title: { en: string; zh: string };
  authors: string;
  venue: string;
  year: string;
  links: PublicationLink;
  tags: string[];
  abstract?: { en: string; zh: string };
}

const publications: Publication[] = [
  // ── Placeholder 1 ────────────────────────────────────────────────────
  {
    title: {
      en: 'Title Placeholder — Replace with Your Paper',
      zh: '论文标题占位符 — 请替换为你的论文',
    },
    authors: 'Kailiang Cheng, ...',
    venue: 'Under Review / Preprint',
    year: '2026',
    links: { paper: '', code: '', project: '' },
    tags: ['Diffusion Models', 'Image Editing'],
    abstract: {
      en: 'TODO: Add a brief abstract.',
      zh: 'TODO：添加简短的摘要。',
    },
  },

  // ── Placeholder 2 ────────────────────────────────────────────────────
  {
    title: {
      en: 'Another Title Placeholder',
      zh: '另一篇论文标题占位符',
    },
    authors: 'Kailiang Cheng, ...',
    venue: 'Preprint',
    year: '2026',
    links: { paper: '', code: '', project: '' },
    tags: ['Flow Matching', 'Optimal Transport'],
    abstract: {
      en: 'TODO: Add a brief abstract.',
      zh: 'TODO：添加简短的摘要。',
    },
  },
];

export default publications;
