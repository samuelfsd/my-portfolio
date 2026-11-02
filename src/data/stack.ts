// `key` maps to `about.stack.<key>` in src/messages/*.json.
// `main: true` marks the core stack, rendered as solid black chips.
export type StackItem = { name: string; main?: boolean };

export const stackData: { key: string; items: StackItem[] }[] = [
  {
    key: 'backend',
    items: [
      { name: 'Java', main: true },
      { name: 'Spring', main: true },
      { name: 'C#', main: true },
      { name: '.NET', main: true },
      { name: 'SQL' },
      { name: 'REST' },
      { name: 'Node.js' }
    ]
  },
  {
    key: 'frontend',
    items: [
      { name: 'React', main: true },
      { name: 'React Native', main: true },
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    key: 'languages',
    items: [
      { name: 'Java', main: true },
      { name: 'C#', main: true },
      { name: 'TypeScript', main: true },
      { name: 'JavaScript' },
      { name: 'Go' },
      { name: 'Python' }
    ]
  },
  {
    key: 'devops',
    items: [
      { name: 'Docker' },
      { name: 'Azure' },
      { name: 'AWS' },
      { name: 'Git/GitHub' }
    ]
  }
];
