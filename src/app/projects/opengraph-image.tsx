import { ImageResponse } from 'next/og';
import { loadOgFonts, OgCard, ogContentType, ogSize } from '@/lib/og';

export const alt = 'Projects — Conor Kemp';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const eyebrow = 'Portfolio';
  const title = 'Projects';
  const subtitle = 'A selection of work spanning web development, design, and creative exploration.';

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
