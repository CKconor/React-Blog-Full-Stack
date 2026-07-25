export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/lib/contentful';

const title = 'Projects — Conor Kemp';
const description = 'A selection of work spanning web development, design, and creative exploration.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default async function Projects() {
  const data = await getProjects();
  const projects = data.projectsCollection.items;

  return (
    <div className="pt-12 md:pt-20">
      <span className="text-xs uppercase tracking-widest text-accentcolor mb-4 block font-medium opacity-0 animate-fade-up">
        Portfolio
      </span>
      <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05] mb-4 opacity-0 animate-fade-up stagger-1">
        Projects
      </h1>
      <p className="text-sm text-lightsubtext dark:text-darksubtext mb-14 max-w-md opacity-0 animate-fade-up stagger-2">
        A selection of work spanning web development, design, and creative exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((project, index) => (
          <Link
            key={project.sys.id}
            href={`/projects/${project.projectSlug}`}
            className={`group opacity-0 animate-fade-up stagger-${Math.min(index + 3, 8)}`}
          >
            {project.projectImage && (
              <div className="overflow-hidden rounded-sm mb-5">
                <img
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.projectImage.url}
                  alt={project.projectImage.title}
                />
              </div>
            )}
            <h3 className="text-base font-medium mb-2 group-hover:text-accentcolor transition-colors">
              {project.projectTitle}
            </h3>
            <p className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed line-clamp-2">
              {project.projectExcerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
