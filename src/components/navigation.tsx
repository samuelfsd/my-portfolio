'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { LanguageSwitcher } from './language-switcher';

const navItems = [
  { key: 'home', href: '#top' },
  { key: 'about', href: '#about' },
  { key: 'work', href: '#projects' },
  { key: 'contact', href: '#contact' }
] as const;

export function Navigation() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-50 border-b-2 border-black bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#top"
            className="font-semibold tracking-tight"
            whileHover={{ scale: 1.05, letterSpacing: '0.05em' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            samuelfsd
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="relative text-neutral-600 transition-colors hover:text-black"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                variants={{ rest: { y: 0 }, hover: { y: -2 } }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {t(item.key)}
                <motion.span
                  aria-hidden
                  className="absolute right-0 -bottom-0.5 left-0 h-0.5 origin-left bg-black"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <motion.button
              type="button"
              aria-label={isOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              onClick={() => setIsOpen((open) => !open)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="h-0.5 w-6 bg-black"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="h-0.5 w-6 bg-black"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="h-0.5 w-6 bg-black"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          id="mobile-menu"
          className="overflow-hidden md:hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          inert={!isOpen}
        >
          <div className="flex flex-col gap-4 pt-4 pb-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-neutral-600 hover:text-black"
                onClick={() => setIsOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, delay: isOpen ? index * 0.1 : 0 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
