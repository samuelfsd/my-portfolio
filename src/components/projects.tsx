import { useTranslations } from 'next-intl';

import { projectsData } from '@/data/projects';

import { type ProjectCardData, ProjectStack } from './project-stack';
import { Reveal } from './reveal';

export function Projects() {
  const t = useTranslations('projects');

  const cards: ProjectCardData[] = projectsData.map((project) => ({
    ...project,
    kindLabel: t(`kinds.${project.kind}`),
    description: t(`items.${project.id}`)
  }));

  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-black px-6 pt-24 pb-12 text-white md:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 flex flex-col gap-6 md:mb-0 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold tracking-tighter md:text-7xl">
            <span className="mr-4 align-top font-mono text-sm tracking-normal text-neutral-500">
              02
            </span>
            {t('title')}
            <sup className="ml-2 font-mono text-base tracking-normal text-neutral-500">
              ({String(cards.length).padStart(2, '0')})
            </sup>
          </h2>
          <p className="max-w-xs text-neutral-400">{t('subtitle')}</p>
        </Reveal>

        <ProjectStack projects={cards} visitLabel={t('visit')} />
      </div>
    </section>
  );
}
