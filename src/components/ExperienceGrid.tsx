import Link from 'next/link';
import { roles, type Role } from '@/data/cv';

function RoleBody({ role, linked }: { role: Role; linked: boolean }) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-0.5 md:gap-4 mb-4">
        <div>
          <h3
            className={linked ? 'transition-colors duration-150 group-hover:text-accent-11' : undefined}
          >
            {role.company}
          </h3>
          <p className="text-description text-ink-11 mt-0.5">{role.title}</p>
        </div>
        <span className="text-description text-ink-11 tabular-nums md:shrink-0">{role.period}</span>
      </div>
      <ul className="text-description text-ink-11 max-w-2xl list-disc pl-5 space-y-1.5 mb-4 marker:text-accent-9">
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {role.tech.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

function ExperienceGrid({ linkToAbout = false }: { linkToAbout?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {roles.map((role) => {
        const key = `${role.company}-${role.period}`;
        return linkToAbout ? (
          <Link href="/about" key={key} className="card pressable group block p-4 md:p-5">
            <RoleBody role={role} linked />
          </Link>
        ) : (
          <div key={key} className="card p-4 md:p-5">
            <RoleBody role={role} linked={false} />
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceGrid;
