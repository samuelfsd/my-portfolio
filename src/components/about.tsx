import { Chip } from '@heroui/react';
import { useTranslations } from 'next-intl';

import { stackData } from '@/data/stack';

import { Reveal } from './reveal';
import { Section } from './section';

export function About() {
  const t = useTranslations('about');
  const bio = t.raw('bio') as string[];

  return (
    <Section id="about" index="01" title={t('title')}>
      <div className="grid gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {bio.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 0.1}>
              <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <Reveal>
            <h3 className="font-mono text-sm text-neutral-500 uppercase">
              {t('stackTitle')}
            </h3>
          </Reveal>
          {stackData.map((group, i) => (
            <Reveal
              key={group.key}
              delay={i * 0.1}
              className="border-t border-neutral-200 pt-4"
            >
              <p className="mb-3 font-medium">{t(`stack.${group.key}`)}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Chip
                    key={tech.name}
                    color={tech.main ? 'accent' : 'default'}
                    variant={tech.main ? 'primary' : 'secondary'}
                  >
                    {tech.name}
                  </Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
