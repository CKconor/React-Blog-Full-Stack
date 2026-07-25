import { ImageResponse } from 'next/og';
import { getBlogBySlug } from '@/lib/contentful';
import { loadOgFonts, OgCard, ogContentType, ogSize, truncate } from '@/lib/og';

export const alt = 'Blog post — Conor Kemp';
export const size = ogSize;
export const contentType = ogContentType;

type Props = {
  params: Promise<{ blogslug: string }>;
};

export default async function Image({ params }: Props) {
  const { blogslug } = await params;
  const blog = await getBlogBySlug(blogslug);

  const eyebrow = 'Blog';
  const title = truncate(blog?.blogTitle ?? 'Blog Post', 70);
  const subtitle = blog?.blogExcerpt ? truncate(blog.blogExcerpt, 140) : undefined;

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle ?? ''}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
