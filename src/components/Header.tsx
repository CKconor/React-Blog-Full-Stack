'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="pt-8 pb-4 md:pt-12 md:pb-6">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl tracking-tight text-darkmode dark:text-lightmode hover:opacity-70 transition-opacity"
        >
          CK
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link text-sm tracking-wide uppercase transition-colors ${
                pathname === href
                  ? 'active text-darkmode dark:text-lightmode'
                  : 'text-lightsubtext dark:text-darksubtext hover:text-darkmode dark:hover:text-lightmode'
              }`}
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
