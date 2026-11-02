import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="px-6 py-8">
      <p className="mx-auto max-w-7xl font-mono text-xs text-neutral-500">
        {t('rights', { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
