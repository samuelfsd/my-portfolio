// `key` maps to `about.stack.<key>` in src/messages/*.json
export const stackData = [
  {
    key: 'languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Go']
  },
  { key: 'backend', items: ['Node.js', 'Spring', 'SQL', 'REST'] },
  {
    key: 'frontend',
    items: ['React', 'React Native', 'Next.js', 'Tailwind CSS']
  },
  { key: 'devops', items: ['Docker', 'Azure', 'AWS', 'Git/GitHub'] }
] as const;
