export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Article from '@/components/Article';
import { getBlogBySlug } from '@/lib/contentful';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ blogslug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogslug } = await params;
  const blog = await getBlogBySlug(blogslug);

  if (!blog) return {};

  const title = `${blog.blogTitle} — Conor Kemp`;
  const description = blog.blogExcerpt;

  return {
    title,
    description,
    openGraph: { title, description, type: 'article' },
    twitter: { title, description },
  };
}

export default async function BlogDetails({ params }: Props) {
  const { blogslug } = await params;
  const blog = await getBlogBySlug(blogslug);

  if (!blog) notFound();

  const formattedDate = new Date(blog.sys.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Article
      backHref="/blog"
      backLabel="Back to blog"
      title={blog.blogTitle}
      image={blog.featureimage}
      meta={`Conor Kemp · ${formattedDate}`}
      content={blog.blogContent}
    />
  );
}
