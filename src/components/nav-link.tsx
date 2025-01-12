'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type NavLinkProps = LinkProps;

export function NavLink(props: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();

  return (
    <Link
      data-current={pathname === props.href}
      className="hover:no-underline flex items-center gap-1.5 text-sm font-medium data-[current=true]:border-b data-[current=true]:border-black"
      {...props}
    />
  );
}
