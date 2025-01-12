import { projectsData } from '@/data/projects';
import { Card } from './card';

export function Projects() {
  return (
    <section className="m-16">
      <h3 className="mb-4 text-xl font-bold">Projects</h3>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-6">
        {projectsData.map((project) => (
          <Card key={project.title} title={project.title} dir={project.dir} />
        ))}
      </div>
    </section>
  );
}
