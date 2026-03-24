const STATIC_PROJECTS = [
  {
    id: '1',
    title: 'Anka Portfolio',
    summary: 'Personal portfolio website for a photographer/artist.',
    longDescription:
      'A clean, minimal portfolio built with React and Vite, showcasing photography and art work with a custom CMS powered by Sanity.',
    coverImage: 'https://placehold.co/720x480/1a1a1a/ffffff?text=Anka+Portfolio',
    images: [
      'https://placehold.co/1600x900/1a1a1a/ffffff?text=Anka+Portfolio',
    ],
    tags: ['React', 'Sanity', 'Tailwind CSS', 'Vite'],
    links: {
      demo: 'https://ankamitrovic.com',
      github: null,
    },
  },
  {
    id: '2',
    title: 'Portfolio v2',
    summary: 'This portfolio — built with React, Tailwind CSS, and Sanity CMS.',
    longDescription:
      'Second iteration of my personal portfolio. Features dark/light mode, a projects section driven by Sanity, a pricing section, and a contact form.',
    coverImage: 'https://placehold.co/720x480/1a1a1a/ffffff?text=Portfolio+v2',
    images: [
      'https://placehold.co/1600x900/1a1a1a/ffffff?text=Portfolio+v2',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Sanity'],
    links: {
      demo: 'https://v2.jovanljusic.com',
      github: null,
    },
  },
  {
    id: '3',
    title: 'More projects on v3',
    summary: 'Check out the new portfolio for a full list of projects.',
    longDescription:
      'The new version of this portfolio at jovanljusic.com contains updated project case studies, a refreshed design, and more detail on each project.',
    coverImage: 'https://placehold.co/720x480/3B82F6/ffffff?text=Portfolio+v3',
    images: [
      'https://placehold.co/1600x900/3B82F6/ffffff?text=jovanljusic.com',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Sanity'],
    links: {
      demo: 'https://jovanljusic.com',
      github: null,
    },
  },
]

export default function useProjects() {
  return { projects: STATIC_PROJECTS, loading: false, error: null }
}
