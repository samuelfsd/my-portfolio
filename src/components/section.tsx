import type { ReactNode } from 'react';

import { Reveal } from './reveal';

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b-2 border-black px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-12 flex items-baseline gap-4 text-3xl font-semibold tracking-tight md:text-5xl">
            <span className="font-mono text-sm text-neutral-500">{index}</span>
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
