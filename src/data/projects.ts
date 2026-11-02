// `id` maps to `projects.items.<id>` and `kind` to `projects.kinds.<kind>`
// in src/messages/*.json
export type Project = {
  id: string;
  title: string;
  url: string;
  kind: 'research' | 'product' | 'openSource' | 'organization' | 'study';
  tech: string[];
};

export const projectsData: Project[] = [
  {
    id: 'spatialFairness',
    title: 'Spatial Fairness Workflow',
    url: 'https://github.com/samuelfsd/workflow-spatial-fairness',
    kind: 'research',
    tech: ['Python', 'scikit-learn', 'HDBSCAN', 'pandas', 'Folium']
  }
];
