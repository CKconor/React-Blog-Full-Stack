export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/codeblock';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
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
    <div className="pt-12 md:pt-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-lightsubtext dark:text-darksubtext hover:text-accentcolor transition-colors mb-10"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to projects
      </Link>

      {project.projectImage && (
        <div className="overflow-hidden rounded-sm mb-10 opacity-0 animate-fade-up">
          <img
            className="w-full max-w-2xl h-72 object-cover"
            src={project.projectImage.url}
            alt={project.projectImage.title}
          />
        </div>
      )}

      <h1 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.1] mb-8 opacity-0 animate-fade-up stagger-1">
        {project.projectTitle}
      </h1>

      <div className="opacity-0 animate-fade-up stagger-2">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkEmoji, remarkFrontmatter]}
          components={CodeBlock}
          className="markdown text-darkmode dark:text-lightmode max-w-2xl text-[15px]"
        >
          {project.projectDetails}
        </ReactMarkdown>
      </div>
    </div>
  );
}
