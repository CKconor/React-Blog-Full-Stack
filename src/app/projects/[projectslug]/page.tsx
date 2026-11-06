export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Article from '@/components/Article';
import { getProjectBySlug } from '@/lib/contentful';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ projectslug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectslug } = await params;
  const project = await getProjectBySlug(projectslug);

  if (!project) return {};

  const title = `${project.projectTitle} — Conor Kemp`;
  const description = project.projectExcerpt;

  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    twitter: { title, description },
  };
}

export default async function ProjectDetails({ params }: Props) {
  const { projectslug } = await params;
  const project = await getProjectBySlug(projectslug);

  if (!project) notFound();

  return (
    <Article
      backHref="/projects"
      backLabel="Back to projects"
      title={project.projectTitle}
      image={project.projectImage}
      content={project.projectDetails}
    />
  );
}
