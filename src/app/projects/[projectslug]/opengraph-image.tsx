import { ImageResponse } from 'next/og';
import { getProjectBySlug } from '@/lib/contentful';
import { loadOgFonts, OgCard, ogContentType, ogSize, truncate } from '@/lib/og';

export const alt = 'Project — Conor Kemp';
export const size = ogSize;
export const contentType = ogContentType;

type Props = {
  params: Promise<{ projectslug: string }>;
};

export default async function Image({ params }: Props) {
  const { projectslug } = await params;
  const project = await getProjectBySlug(projectslug);

  const eyebrow = 'Project';
  const title = truncate(project?.projectTitle ?? 'Project', 70);
  const subtitle = project?.projectExcerpt ? truncate(project.projectExcerpt, 140) : undefined;

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle ?? ''}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
