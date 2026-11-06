'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/site';

function Header() {
  const pathname = usePathname();

  return (
    <header className="py-2">
      <nav className="flex items-center justify-between gap-2">
        <Link
          href="/"
          aria-label="Conor Kemp, home"
          className="pressable relative font-serif text-section"
        >
          CK
          <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-accent-9" />
        </Link>
        <div className="flex items-center gap-0.5">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className="nav-item"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
