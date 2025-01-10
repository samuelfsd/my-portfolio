import Link from 'next/link';

export function Header() {
  return (
    <header className="flex items-center justify-between h-32 mx-16">
      <span className="nes-avatar is-medium flex items-center justify-center">
        <Link href="https://github.com/samuelfsd" target="_blank">
          <i className="nes-bcrikko"></i>
        </Link>
      </span>

      <nav className="flex items-center justify-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/stack">Stack</Link>
      </nav>
    </header>
  );
}
