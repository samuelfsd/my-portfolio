'use client';

import { buttonVariants } from '@heroui/react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const spring = { type: 'spring', stiffness: 400 } as const;

export function Hero() {
  const t = useTranslations('hero');
  const greeting = t('greeting').split(' ');
  const name = t('name').split(' ');
  // Words are split for the staggered blur-in; ids keep keys stable per locale
  const words = [...greeting, ...name].map((word, i) => ({
    id: `${i}:${word}`,
    word,
    i
  }));

  return (
    <section
      id="top"
      className="flex min-h-svh items-center justify-center px-6 pt-24 pb-20"
    >
      <div className="w-full max-w-4xl">
        <h1 className="mb-6 text-5xl leading-[1.05] font-semibold tracking-tighter sm:text-6xl md:text-7xl">
          {words.map(({ id, word, i }) => {
            const isName = i >= greeting.length;
            return (
              <span key={id}>
                <motion.span
                  className={`inline-block ${isName ? 'text-black' : 'text-neutral-400'}`}
                  initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }}
                  whileHover={isName ? { letterSpacing: '0.03em' } : undefined}
                >
                  {word}
                </motion.span>{' '}
              </span>
            );
          })}
        </h1>

        <motion.h2
          className="mb-8 text-2xl font-medium tracking-tight text-neutral-500 md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ x: 5 }}
            transition={spring}
          >
            {t('role')}
          </motion.span>
        </motion.h2>

        <motion.p
          className="mb-12 max-w-2xl text-lg leading-relaxed text-neutral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {t('summary')}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className={buttonVariants({ size: 'lg', variant: 'primary' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
          >
            {t('ctaWork')}
          </motion.a>
          <motion.a
            href="#contact"
            className={buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'border-2 border-black'
            })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
          >
            {t('ctaContact')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
