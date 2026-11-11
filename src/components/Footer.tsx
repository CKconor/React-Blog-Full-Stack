import Link from 'next/link';
import { contactEmail, navItems, socialLinks } from '@/data/site';

const footerLink =
  'flex items-center text-ink-11 hover:text-ink-12 transition-colors duration-150 max-md:min-h-11';

function Footer() {
  return (
    <footer className="hairline-t mt-8 pt-8">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-1">
          <span>Conor Kemp</span>
          <p className="text-description text-ink-11 max-w-xs">
            Fullstack developer & UI designer based in the UK, building clean digital experiences.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col md:gap-1">
            <span className="mb-1">Navigate</span>
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className={footerLink}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col md:gap-1">
            <span className="mb-1">Connect</span>
            {socialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="text-ink-11">&copy; {new Date().getFullYear()} Conor Kemp</span>
        <a href={`mailto:${contactEmail}`} className="link-accent">
          {contactEmail}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
