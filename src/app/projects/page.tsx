export const revalidate = 3600;

import type { Metadata } from 'next';
import EntryCard from '@/components/EntryCard';
import EntryGrid from '@/components/EntryGrid';
import PageIntro from '@/components/PageIntro';
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
    <>
      <PageIntro title="Projects" description={description} />
      <EntryGrid>
        {projects.map((project, index) => (
          <EntryCard
            key={project.sys.id}
            href={`/projects/${project.projectSlug}`}
            title={project.projectTitle}
            excerpt={project.projectExcerpt}
            image={project.projectImage}
            stagger={Math.min(index + 3, 8)}
          />
        ))}
      </EntryGrid>
    </>
  );
}
