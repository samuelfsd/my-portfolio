'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';
import { type Locale, routing } from '@/i18n/routing';

export function LanguageSwitcher() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: next, scroll: false });
    });
  }

  return (
    <fieldset
      aria-label={t('language')}
      className="flex border-2 border-black font-mono text-xs"
      disabled={isPending}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === locale}
          className="cursor-pointer px-2 py-1 uppercase transition-colors hover:bg-neutral-100 aria-pressed:bg-black aria-pressed:text-white aria-pressed:hover:bg-black"
        >
          {l}
        </button>
      ))}
    </fieldset>
  );
}
