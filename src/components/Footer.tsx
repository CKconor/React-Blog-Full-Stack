import Link from 'next/link';

const socialLinks = [
  { href: "https://github.com/ckconor", label: "GitHub" },
  { href: "https://www.linkedin.com/in/conor-kemp-790920178", label: "LinkedIn" },
  { href: "https://dribbble.com/CKconor", label: "Dribbble" },
  { href: "https://youtube.com/ckplaysthegames", label: "YouTube" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

function Footer() {
  return (
    <footer className="mt-20 pt-10 border-t border-border dark:border-borderdark">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-6">
          <span className="font-serif text-xl tracking-tight">Conor Kemp</span>
          <p className="text-sm text-lightsubtext dark:text-darksubtext max-w-xs leading-relaxed">
            Fullstack developer & UI designer based in the UK, building clean digital experiences.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-lightsubtext dark:text-darksubtext mb-1">
              Navigate
            </span>
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-lightsubtext dark:text-darksubtext hover:text-darkmode dark:hover:text-lightmode transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-lightsubtext dark:text-darksubtext mb-1">
              Connect
            </span>
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-lightsubtext dark:text-darksubtext hover:text-darkmode dark:hover:text-lightmode transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border dark:border-borderdark flex items-center justify-between">
        <span className="text-xs text-lightsubtext dark:text-darksubtext">
          &copy; {new Date().getFullYear()} Conor Kemp
        </span>
        <a
          href="mailto:conorkempwebstudio@gmail.com"
          className="text-xs text-accentcolor hover:opacity-70 transition-opacity"
        >
          conorkempwebstudio@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
