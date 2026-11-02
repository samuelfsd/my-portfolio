'use client';

import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform
} from 'motion/react';
import { type PointerEvent, useRef } from 'react';

import type { Project } from '@/data/projects';

export type ProjectCardData = Project & {
  kindLabel: string;
  description: string;
};

type ProjectStackProps = {
  projects: ProjectCardData[];
  visitLabel: string;
};

/**
 * Sticky "stacking cards": each card pins to the viewport while the next one
 * slides over it; cards underneath shrink and dim as the stack grows.
 */
export function ProjectStack({ projects, visitLabel }: ProjectStackProps) {
  const containerRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <ul ref={containerRef} className="relative">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
          visitLabel={visitLabel}
        />
      ))}
    </ul>
  );
}

type ProjectCardProps = {
  project: ProjectCardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
  visitLabel: string;
};

function ProjectCard({
  project,
  index,
  total,
  progress,
  visitLabel
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  // The card shrinks from the moment it pins until the end of the stack
  const range = [index / total, 1];
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, range, [1, targetScale]);
  const dim = useTransform(progress, range, [0, (total - 1 - index) * 0.12]);

  // Cursor-following spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgb(255 255 255 / 0.09), transparent 65%)`;

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const number = String(index + 1).padStart(2, '0');

  return (
    <li className="sticky top-0 flex h-svh items-center justify-center">
      <motion.article
        onPointerMove={handlePointerMove}
        style={{
          scale: reduceMotion ? 1 : scale,
          top: `calc(${index * 28}px - 2vh)`
        }}
        className="group relative flex h-[min(460px,70svh)] w-full origin-top flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-7 transition-colors duration-500 hover:border-white/25 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-white md:h-[min(560px,72svh)] md:p-12"
      >
        {/* Spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />

        {/* Oversized ghost number */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-10 text-[11rem] leading-none font-semibold tracking-tighter text-white/[0.04] transition-transform duration-700 select-none group-hover:-translate-y-3 md:text-[18rem]"
        >
          {number}
        </span>

        <header className="relative flex items-center justify-between font-mono text-xs tracking-widest text-neutral-500 uppercase">
          <span>
            {number} / {String(total).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-neutral-300">
            {project.kindLabel}
          </span>
        </header>

        <div className="relative mt-auto flex flex-col gap-5">
          <h3 className="text-4xl font-semibold tracking-tighter transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-7xl">
            {/* Stretched link: the whole card is clickable */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </a>
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            {project.description}
          </p>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-neutral-300 transition-colors group-hover:border-white/30"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <span className="flex items-center gap-3 text-sm whitespace-nowrap">
              {visitLabel}
              <span className="grid size-10 place-items-center rounded-full border border-white/20 transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white group-hover:text-black">
                →
              </span>
            </span>
          </div>
        </div>

        {/* Dims the card as later ones stack on top of it */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ opacity: reduceMotion ? 0 : dim }}
        />
      </motion.article>
    </li>
  );
}
