const steps = (prefix, keys) =>
  Object.fromEntries(keys.map((key) => [key, `var(--${prefix}-${key})`]));

const textRole = (name) => [`var(--text-${name})`, { lineHeight: `var(--leading-${name})` }];

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  future: {
    // Hover styles only for a mouse or trackpad, so they never stick after a tap.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ink: steps('ink', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        accent: steps('accent', [3, 4, 6, 9, 10, 11, 'contrast']),
        line: 'var(--line)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        badge: textRole('badge'),
        body: textRole('body'),
        prose: textRole('prose'),
        title: textRole('title'),
        section: textRole('section'),
        display: textRole('display'),
      },
      fontWeight: {
        // One weight: hierarchy is a size step plus an ink step.
        normal: 'var(--font-weight-ui)',
        medium: 'var(--font-weight-ui)',
        semibold: 'var(--font-weight-ui)',
      },
      borderRadius: {
        control: 'var(--radius-control)',
        container: 'var(--radius-container)',
      },
      boxShadow: {
        button: 'var(--shadow-button)',
        primary: 'var(--shadow-primary)',
        card: 'var(--shadow-card)',
        panel: 'var(--shadow-panel)',
      },
      maxWidth: {
        read: '50rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-out)',
      },
    },
  },
  plugins: [],
}
