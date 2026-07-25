import { ImageResponse } from 'next/og';
import { loadOgFonts, OgCard, ogContentType, ogSize } from '@/lib/og';

export const alt = 'Conor Kemp — Lead Frontend Engineer';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const eyebrow = 'Lead Frontend Engineer';
  const title = 'Conor Kemp';
  const subtitle = 'Fullstack Developer & UI Designer based in the UK';

  const fonts = await loadOgFonts(title, `${eyebrow} ${subtitle}`);

  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    { ...size, fonts }
  );
}
