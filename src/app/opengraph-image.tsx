import { ImageResponse } from 'next/og';
import { loadOgFonts, OgCard, ogContentType, ogSize } from '@/lib/og';
import { profile, tagline } from '@/data/cv';

export const alt = `Conor Kemp — ${profile.title}`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const eyebrow = profile.title;
  const title = 'Conor Kemp';
  const subtitle = tagline;

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
