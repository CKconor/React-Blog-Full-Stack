import type { ReactElement } from 'react';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const BRAND_NAME = 'Conor Kemp';
const BRAND_ROLE = 'Lead Frontend Engineer';

export const COLORS = {
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

// Satori (used by ImageResponse) supports ttf/otf/woff but not woff2. Google's
// CSS2 endpoint serves woff2 to any modern-looking user agent (which broke this
// in prod, since the host's default fetch UA qualifies), so spoof an ancient
// browser to force it down the truetype/woff compatibility path.
const LEGACY_UA = 'Mozilla/4.0';

// Builds the `family` query value the way Google's CSS2 endpoint expects:
// spaces become `+`, but `:`/`@` (weight axis syntax) must stay literal.
// URLSearchParams would percent-encode all of these (+ -> %2B, : -> %3A,
// @ -> %40), which Google rejects with a 400 "Invalid selector" — so this
// param is built manually instead, and only the free-text `text` param
// goes through encodeURIComponent.
async function fetchFont(family: string, text: string): Promise<ArrayBuffer> {
  const familyParam = family.replace(/ /g, '+');
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${familyParam}&text=${encodeURIComponent(text)}`, {
      headers: { 'User-Agent': LEGACY_UA },
      next: { revalidate: 86400 },
    })
  ).text();

  const match = css.match(/src: url\(([^)]+)\) format\('(?:woff|opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not resolve font file for query: ${family} (response: ${css.slice(0, 200)})`);

  const response = await fetch(match[1], { next: { revalidate: 86400 } });
  return response.arrayBuffer();
}

async function loadSerifFont(text: string) {
  const serifChars = Array.from(new Set(text)).join('');
  const data = await fetchFont('Instrument Serif', serifChars);
  return { name: 'Instrument Serif', data, weight: 400 as const, style: 'normal' as const };
}

export async function loadOgFonts(serifText: string, sansText: string) {
  const sansChars = Array.from(new Set(`${sansText}${BRAND_NAME}${BRAND_ROLE}`)).join('');

  const [serif, sans, sansMedium] = await Promise.all([
    loadSerifFont(serifText),
    fetchFont('DM Sans:wght@400', sansChars),
    fetchFont('DM Sans:wght@500', sansChars),
  ]);

  return [
    serif,
    { name: 'DM Sans', data: sans, weight: 400 as const, style: 'normal' as const },
    { name: 'DM Sans', data: sansMedium, weight: 500 as const, style: 'normal' as const },
  ];
}

export async function loadMonogramFont(text: string) {
  return [await loadSerifFont(text)];
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
