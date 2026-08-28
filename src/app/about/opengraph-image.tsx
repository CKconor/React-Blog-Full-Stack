import { ImageResponse } from 'next/og';
import { loadOgFonts, OgCard, ogContentType, ogSize } from '@/lib/og';
import { profile } from '@/data/cv';

export const alt = 'About — Conor Kemp';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const eyebrow = 'About';
  const title = 'Conor Kemp';
  const subtitle = profile.title;

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
