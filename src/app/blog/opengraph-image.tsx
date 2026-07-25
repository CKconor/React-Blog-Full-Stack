import { ImageResponse } from 'next/og';
import { loadOgFonts, OgCard, ogContentType, ogSize } from '@/lib/og';

export const alt = 'Blog — Conor Kemp';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const eyebrow = 'Writing';
  const title = 'Blog';
  const subtitle = 'Thoughts on development, design, and things I find interesting.';

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
