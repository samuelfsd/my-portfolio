import Link from 'next/link';

import { NavLink } from './nav-link';

export function Header() {
  return (
    <header className="md:justify-between flex items-center justify-center h-32 mx-16">
      <span className="nes-avatar is-medium md:flex md:items-center md:justify-center hidden">
        <Link href="https://github.com/samuelfsd" target="_blank">
          <i className="nes-bcrikko"></i>
        </Link>
      </span>

      <nav className="flex items-center justify-center gap-6">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/stack">Stack</NavLink>
      </nav>
    </header>
  );
}
