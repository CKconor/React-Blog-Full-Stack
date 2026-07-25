import type { Metadata } from 'next';
import Portrait from '@/assets/portrait.png';

const title = 'About — Conor Kemp';
const description = 'Lead Frontend Developer with 6+ years of experience building scalable, production-grade web applications using React, Next.js, and TypeScript.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

const workHistory = [
  {
    period: "Jan 2024 - Present",
    company: "Configur",
    role: "Lead Frontend Developer",
    tech: "Next.js, TypeScript, React, TanStack Query, Zustand, Redux Toolkit, Tailwind CSS, Framer Motion, GSAP, OAuth, GitLab CI (Pipelines), Turborepo, Jest, Playwright, Claude Code, Claude Skills, MCP Servers, Subagents",
  },
  {
    period: "Jun 2022 - Jan 2024",
    company: "Configur",
    role: "Full Stack Developer",
    tech: "Next.js, TypeScript, React, TanStack Query, styled-components, MongoDB, AWS Lambda, Node.js, Jest",
  },
  {
    period: "Jan 2022 - Jun 2022",
    company: "Raytheon UK",
    role: "Software Engineer",
    tech: "TypeScript, React, Docker, AWS, Node.js, Express, Jest",
  },
  {
    period: "Dec 2020 - Jan 2022",
    company: "Gtech",
    role: "Creative Frontend Developer",
    tech: "HTML, SCSS, XML, Magento 2, PHP, jQuery, Bootstrap, Git",
  },
  {
    period: "May 2020 - Dec 2020",
    company: "This is Union",
    role: "Junior Developer",
    tech: "HTML, SCSS, jQuery, WordPress, PHP",
  },
];

const socialLinks = [
  { href: "https://youtube.com/ckplaysthegames", label: "YouTube" },
  { href: "https://github.com/ckconor", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/conor-kemp-790920178",
    label: "LinkedIn",
  },
  { href: "https://dribbble.com/CKconor", label: "Dribbble" },
];

export default function About() {
  return (
    <div className="pt-12 md:pt-20">
      <div className="flex flex-row items-start justify-between mb-16">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-accentcolor mb-4 block font-medium opacity-0 animate-fade-up">
            About
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05] opacity-0 animate-fade-up stagger-1">
            Conor Kemp
          </h1>
          <p className="text-lg text-lightsubtext dark:text-darksubtext mt-2 opacity-0 animate-fade-up stagger-2">
            Lead Frontend Developer
          </p>
        </div>
        <div className="hidden md:block w-40 flex-shrink-0 ml-12 opacity-0 animate-fade-in stagger-3">
          <img
            src={Portrait.src}
            alt="Conor Kemp"
            className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Bio */}
      <section className="mb-16 opacity-0 animate-fade-up stagger-3">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-0 whitespace-nowrap">
            Experience
          </h2>
          <div className="w-full h-px bg-border dark:bg-borderdark" />
        </div>
        <div className="max-w-xl space-y-5 text-sm leading-relaxed text-lightsubtext dark:text-darksubtext">
          <p>
            Lead Frontend Engineer with 6+ years of experience building
            scalable, production-grade web applications using React, Next.js,
            and TypeScript. Proven track record of architecting frontend
            systems, mentoring engineering teams, and delivering
            high-performance applications across startups and enterprise
            environments.
          </p>
          <p>
            Expert in full-stack frontend architecture, performance
            optimization, and establishing engineering best practices.
            Specialized in Next.js server-side rendering, component architecture
            design, and building SEO-friendly web applications. Passionate about
            shipping user-centric products, raising team technical capability,
            and creating scalable, maintainable codebases.
          </p>
        </div>
      </section>

      {/* Work History */}
      <section className="mb-16 opacity-0 animate-fade-up stagger-4">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-0 whitespace-nowrap">
            Work History
          </h2>
          <div className="w-full h-px bg-border dark:bg-borderdark" />
        </div>
        <div className="flex flex-col">
          {workHistory.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="py-6 border-b border-border dark:border-borderdark last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                <h3 className="text-base font-medium mb-0">
                  {job.company}
                  <span className="text-lightsubtext dark:text-darksubtext font-normal">
                    {" "}
                    &mdash; {job.role}
                  </span>
                </h3>
                <span className="text-xs text-lightsubtext dark:text-darksubtext font-mono shrink-0">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-lightsubtext dark:text-darksubtext">
                {job.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="mb-16 opacity-0 animate-fade-up stagger-5">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-0 whitespace-nowrap">
            Personal
          </h2>
          <div className="w-full h-px bg-border dark:bg-borderdark" />
        </div>
        <p className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed max-w-xl">
          Outside of work, I&apos;m pretty much always surrounded by tech in some
          form. I&apos;m deeply into video games—everything from narrative-driven
          single-player experiences to competitive multiplayer games where I can
          lose track of time, I&apos;m also a bit of a keyboard enthusiast, which
          started as a practical hobby but has evolved into something I
          genuinely enjoy tinkering with. Building and customizing mechanical
          keyboards scratches a different itch—it&apos;s and allows me to have a more
          hands on hobby.
        </p>
        <p className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed max-w-xl mt-2">
          Travel is a big priority for me too. I&apos;ve made it a goal to visit a
          new country at least once a year, and it&apos;s one of the best
          ways I&apos;ve found to step outside my routine and away from tech. Beyond the sightseeing,
          what really draws me in is experiencing different food cultures. I
          love seeking out local restaurants, street food, markets.
        </p>
      </section>

      {/* Links */}
      <section className="opacity-0 animate-fade-up stagger-6">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-0 whitespace-nowrap">
            Links
          </h2>
          <div className="w-full h-px bg-border dark:bg-borderdark" />
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-full border border-border dark:border-borderdark text-lightsubtext dark:text-darksubtext hover:border-accentcolor hover:text-accentcolor transition-colors"
            >
              {label}
              <svg
                className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
