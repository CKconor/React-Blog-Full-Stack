import { ImageResponse } from 'next/og';
import { COLORS, loadMonogramFont } from '@/lib/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const fonts = await loadMonogramFont('CK');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.bg,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'Instrument Serif',
            fontSize: 84,
            letterSpacing: -1.5,
            color: COLORS.fg,
          }}
        >
          CK
        </div>
        <div
          style={{
            display: 'flex',
            width: 56,
            height: 8,
            borderRadius: 4,
            backgroundColor: COLORS.accent,
            marginTop: 10,
          }}
        />
      </div>
    ),
    { ...size, fonts }
  );
}
