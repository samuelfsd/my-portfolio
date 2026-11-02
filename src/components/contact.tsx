import { useTranslations } from 'next-intl';

import { contactLinks } from '@/data/contact';

import { Reveal } from './reveal';
import { Section } from './section';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <Section id="contact" index="03" title={t('title')}>
      <Reveal>
        <p className="mb-12 max-w-xl text-lg text-neutral-600 md:text-xl">
          {t('text')}
        </p>
      </Reveal>
      <ul className="border-t-2 border-black">
        {contactLinks.map((link, i) => (
          <li key={link.label} className="border-b-2 border-black">
            <Reveal delay={i * 0.1}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-6 transition-colors hover:bg-black hover:text-white sm:flex-row sm:items-center sm:justify-between md:px-4"
              >
                <span className="text-2xl font-semibold tracking-tight md:text-4xl">
                  {link.label}
                </span>
                <span className="font-mono text-sm text-neutral-500 group-hover:text-neutral-300">
                  {link.handle} ↗
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
