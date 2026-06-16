/**
 * Personal profile information.
 *
 * TODO: Replace the placeholder values below with your real information.
 * Fields marked with "TODO" are intentionally blank — fill them in as needed.
 */

export interface Profile {
  name: { en: string; zh: string };
  email: string; // TODO: replace with your real email
  github: string; // TODO: replace with your GitHub username
  googleScholar: string; // TODO: replace with your Google Scholar URL
  orcid: string; // TODO: replace with your ORCID iD
  linkedin: string; // TODO: replace with your LinkedIn URL
  location: { en: string; zh: string };
  university: { en: string; zh: string };
  undergrad: { en: string; zh: string };
}

const profile: Profile = {
  name: { en: 'Kailiang Cheng', zh: '程开良' },
  email: 'chengelsanna@gmail.com', // e.g. 'your-name@mail.ustc.edu.cn'
  github: 'https://github.com/CXY-Olaf', // e.g. 'https://github.com/CXY-Olaf'
  googleScholar: 'TODO', // e.g. 'https://scholar.google.com/citations?user=...'
  orcid: 'TODO', // e.g. 'https://orcid.org/0000-0000-0000-0000'
  linkedin: 'TODO', // e.g. 'https://www.linkedin.com/in/...'
  location: { en: 'Hefei, China', zh: '中国 · 合肥' },
  university: {
    en: 'University of Science and Technology of China (USTC)',
    zh: '中国科学技术大学（USTC）',
  },
  undergrad: {
    en: 'Shanghai Jiao Tong University (SJTU)',
    zh: '上海交通大学（SJTU）',
  },
};

export default profile;
