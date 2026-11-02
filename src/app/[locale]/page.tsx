import { setRequestLocale } from 'next-intl/server';

import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { Projects } from '@/components/projects';

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  setRequestLocale(locale as 'pt' | 'en');

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
