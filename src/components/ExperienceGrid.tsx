import Link from 'next/link';
import { roles } from '@/data/cv';

function ExperienceGrid() {
  return (
    <div className="flex flex-col">
      {roles.map((role) => (
        <Link
          href="/about"
          key={`${role.company}-${role.period}`}
          className="group block py-8 border-b border-border dark:border-borderdark last:border-b-0 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-medium mb-0 group-hover:text-accentcolor transition-colors">
                {role.company}
              </h3>
              <span className="text-sm text-lightsubtext dark:text-darksubtext">
                {role.title}
              </span>
            </div>
            <span className="text-sm text-lightsubtext dark:text-darksubtext font-mono">
              {role.period}
            </span>
          </div>
          <ul className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed mb-4 max-w-xl list-disc pl-5 space-y-1.5 marker:text-accentcolor">
            {role.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {role.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-surface dark:bg-surfacedark text-lightsubtext dark:text-darksubtext"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ExperienceGrid;
