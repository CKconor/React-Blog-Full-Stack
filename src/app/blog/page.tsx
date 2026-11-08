export const revalidate = 3600;

import type { Metadata } from 'next';
import EntryCard from '@/components/EntryCard';
import EntryGrid from '@/components/EntryGrid';
import PageIntro from '@/components/PageIntro';
import { getBlogs } from '@/lib/contentful';

const title = 'Blog — Conor Kemp';
const description = 'Thoughts on development, design, and things I find interesting.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default async function Blogs() {
  const data = await getBlogs();
  const blogs = data.blogPostCollection.items;

  return (
    <>
      <PageIntro title="Blog" description={description} />
      <EntryGrid>
        {blogs.map((blog, index) => (
          <EntryCard
            key={blog.sys.id}
            href={`/blog/${blog.urlSlug}`}
            title={blog.blogTitle}
            excerpt={blog.blogExcerpt}
            image={blog.featureimage}
            stagger={Math.min(index + 3, 8)}
          />
        ))}
      </EntryGrid>
    </>
  );
}
