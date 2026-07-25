import type { ReactElement } from 'react';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const BRAND_NAME = 'Conor Kemp';
const BRAND_ROLE = 'Lead Frontend Engineer';

const COLORS = {
  bg: '#0F0F0F',
  fg: '#FAFAF8',
  subtext: '#A8A8A4',
  accent: '#C8553D',
  border: '#2A2A2A',
};

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

async function fetchFont(familyQuery: string, text: string): Promise<ArrayBuffer> {
  const params = new URLSearchParams({ family: familyQuery, text });
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?${params.toString()}`, {
      next: { revalidate: 86400 },
    })
  ).text();

  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not resolve font file for query: ${familyQuery}`);

  const response = await fetch(match[1], { next: { revalidate: 86400 } });
  return response.arrayBuffer();
}

export async function loadOgFonts(serifText: string, sansText: string) {
  const serifChars = Array.from(new Set(serifText)).join('');
  const sansChars = Array.from(new Set(`${sansText}${BRAND_NAME}${BRAND_ROLE}`)).join('');

  const [serif, sans, sansMedium] = await Promise.all([
    fetchFont('Instrument+Serif', serifChars),
    fetchFont('DM+Sans:wght@400', sansChars),
    fetchFont('DM+Sans:wght@500', sansChars),
  ]);

  return [
    { name: 'Instrument Serif', data: serif, weight: 400 as const, style: 'normal' as const },
    { name: 'DM Sans', data: sans, weight: 400 as const, style: 'normal' as const },
    { name: 'DM Sans', data: sansMedium, weight: 500 as const, style: 'normal' as const },
  ];
}

type OgCardProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function OgCard({ eyebrow, title, subtitle }: OgCardProps): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: COLORS.bg,
        padding: '76px 88px',
        position: 'relative',
        fontFamily: 'DM Sans',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: -220,
          right: -160,
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLORS.accent}33 0%, ${COLORS.accent}00 70%)`,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: COLORS.accent,
            marginBottom: 30,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'Instrument Serif',
            fontSize: title.length > 28 ? 68 : 88,
            lineHeight: 1.08,
            letterSpacing: -1,
            color: COLORS.fg,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              display: 'flex',
              fontFamily: 'DM Sans',
              fontWeight: 400,
              fontSize: 30,
              lineHeight: 1.5,
              color: COLORS.subtext,
              marginTop: 30,
              maxWidth: 760,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `1px solid ${COLORS.border}`,
          paddingTop: 32,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: COLORS.fg,
          }}
        >
          {BRAND_NAME}
        </div>
        <div style={{ display: 'flex', fontFamily: 'DM Sans', fontSize: 22, color: COLORS.subtext }}>
          {BRAND_ROLE}
        </div>
      </div>
    </div>
  );
}
