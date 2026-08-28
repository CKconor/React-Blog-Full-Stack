/**
 * Generates cv-conor-kemp.html from src/data/cv.ts.
 *
 *   node scripts/build-cv.mjs      # data -> HTML
 *   node export-cv.js              # HTML -> PDF
 *
 * Imports the TypeScript data module directly; Node 24 strips types natively,
 * so there is no build step and no extra dependency.
 *
 * ── PDF/ATS constraints baked into the stylesheet below ──────────────────────
 * The generated PDF is parsed by applicant tracking systems before a human
 * reads it, and several innocuous-looking CSS choices silently corrupt the
 * extracted text. Each is annotated inline. Do not "tidy" them away without
 * re-running the verification in scripts/verify-cv.sh.
 */

import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  profile,
  summary,
  roles,
  skillCategories,
  education,
  certifications,
  interests,
} from '../src/data/cv.ts';

const here = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(here, '..', 'cv-conor-kemp.html');

/** Escape the five XML entities. Category titles contain "&". */
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --accent: #C8553D;
      --text: #1A1A1A;
      --subtext: #4A4A4A;
      --border: #D8D8D4;
      --bg: #FFFFFF;
    }

    html { color-scheme: light; }

    html, body {
      font-family: 'DM Sans', system-ui, sans-serif;
      font-size: 10pt;
      color: var(--text);
      background: var(--bg);
      line-height: 1.5;
    }

    .page { max-width: 740px; margin: 0 auto; padding: 34px 52px; }

    /* ── Header ── */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 22px;
    }

    /* ATS: no negative letter-spacing. It collapses the gap between forename and
       surname in content-stream order, so the name extracts as "ConorKemp". */
    .header-left h1 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 33pt;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 6px;
    }

    .header-left .role {
      font-size: 9.5pt;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent);
      font-weight: 500;
    }

    /* ATS: the contact block must start BELOW the h1 baseline. With no role line
       under the name, a top-aligned contact block puts its first line level with
       the name, and pdftotext merges them into "Conor Kemp conorkemp@gmail.com"
       — the name is no longer its own field. Keep this padding. */
    .header-right {
      text-align: right;
      font-size: 8.5pt;
      color: var(--subtext);
      line-height: 1.65;
      padding-top: 34px;
    }

    .header-right a { color: var(--subtext); text-decoration: none; }

    /* ── Sections ── */
    .section { margin-bottom: 17px; }

    .section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 11px;
    }

    .section-header h2 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 13pt;
      font-weight: 400;
      white-space: nowrap;
    }

    .section-rule { flex: 1; height: 1px; background: var(--border); }

    /* ATS: break-avoidance belongs on individual items, never on a whole
       section. Applied to Experience it pushes the entire section to a fresh
       page and then overflows, costing a third page. */
    .section-compact { break-inside: avoid; page-break-inside: avoid; }

    /* ── Summary ── */
    .summary p {
      font-size: 9.5pt;
      color: var(--subtext);
      line-height: 1.65;
      max-width: 600px;
    }

    /* ── Experience ── */
    .job {
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .job:last-child { border-bottom: none; }

    .job-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 5px;
    }

    .job-title { font-size: 9.5pt; font-weight: 600; }
    .job-role { font-weight: 400; color: var(--subtext); }

    /* ATS: periods use a plain ASCII hyphen. An en-dash does not round-trip
       through the embedded JetBrains Mono subset and extracts as byte 0xAD,
       which breaks employment-date parsing — the field Greenhouse uses to
       derive years of experience. */
    .job-period {
      font-size: 8pt;
      color: var(--subtext);
      font-family: 'JetBrains Mono', monospace;
      white-space: nowrap;
      margin-left: 16px;
      flex-shrink: 0;
    }

    /* ATS: native list markers only. A custom li::before bullet needs
       position:relative on the li and position:absolute on the marker, and
       positioned elements paint in a later phase than in-flow content — so
       Chrome emits every bullet in one batch AFTER every role heading,
       detaching all of them from their employer. Same failure class as opacity.
       Do not reintroduce positioned markers. */
    .job-points {
      list-style: disc outside;
      padding-left: 13px;
      margin-bottom: 6px;
    }

    .job-points li {
      font-size: 8.5pt;
      color: var(--subtext);
      line-height: 1.55;
      margin-bottom: 2px;
    }

    .job-points li::marker { color: var(--accent); font-size: 0.7em; }

    /* ATS: no opacity. Opacity creates a transparency group, which makes the PDF
       writer emit these runs in a separate batch — detaching every tech line
       from its own role. Use a lighter colour instead. */
    .job-tech { font-size: 8pt; color: #7A7A7A; }

    /* ── Skills ── */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 28px;
    }

    .skill-group h3 {
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text);
      font-weight: 500;
      margin-bottom: 3px;
    }

    /* ATS: comma-delimited text, not pills. Pill spans extract with no delimiter
       at all, so multi-word skills cannot be tokenised ("TanStack Query React
       Context" is unsplittable). */
    .skill-list { font-size: 8.5pt; color: var(--subtext); line-height: 1.5; }

    .skill-group { break-inside: avoid; page-break-inside: avoid; }

    /* ── Education & Interests ── */
    .simple-line { font-size: 9pt; color: var(--subtext); line-height: 1.6; }
    .simple-line strong { color: var(--text); font-weight: 600; }

    @media print {
      html, body { font-size: 10pt; }
      .page { padding: 30px 44px; }
      a { text-decoration: none; }
    }`;

const contactLines = [
  esc(profile.email),
  esc(profile.phone),
  esc(profile.location),
  ...profile.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`),
].join('<br>\n        ');

const jobs = roles
  .map(
    (role) => `
      <div class="job">
        <div class="job-top">
          <div class="job-title">${esc(role.company)} <span class="job-role">&mdash; ${esc(role.title)}</span></div>
          <div class="job-period">${esc(role.period)}</div>
        </div>
        <ul class="job-points">
${role.bullets.map((b) => `          <li>${esc(b)}</li>`).join('\n')}
        </ul>
        <div class="job-tech">${esc(role.tech.join(', '))}</div>
      </div>`,
  )
  .join('\n');

const certificationLines = certifications
  .map(
    (cert) =>
      `      <div class="simple-line"><strong>${esc(cert.name)}</strong> &mdash; ${esc(cert.detail)}</div>`,
  )
  .join('\n');

const skills = skillCategories
  .map(
    (cat) => `
        <div class="skill-group">
          <h3>${esc(cat.title)}</h3>
          <div class="skill-list">${esc(cat.skills.join(', '))}</div>
        </div>`,
  )
  .join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(profile.name)} &mdash; CV</title>
  <!-- GENERATED FILE — do not edit by hand.
       Source: src/data/cv.ts   Generator: scripts/build-cv.mjs -->
  <style>${styles}
  </style>
</head>
<body>
  <div class="page">

    <header class="header">
      <div class="header-left">
        <h1>${esc(profile.name)}</h1>
      </div>
      <div class="header-right">
        ${contactLines}
      </div>
    </header>

    <section class="section summary">
      <div class="section-header">
        <h2>Summary</h2>
        <div class="section-rule"></div>
      </div>
      <p>${esc(summary)}</p>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>Experience</h2>
        <div class="section-rule"></div>
      </div>
${jobs}
    </section>

    <section class="section section-compact">
      <div class="section-header">
        <h2>Skills</h2>
        <div class="section-rule"></div>
      </div>
      <div class="skills-grid">${skills}
      </div>
    </section>

    <section class="section section-compact">
      <div class="section-header">
        <h2>Education &amp; Certifications</h2>
        <div class="section-rule"></div>
      </div>
      <div class="simple-line"><strong>${esc(education.subject)}</strong> &mdash; ${esc(education.detail)}</div>
${certificationLines}
    </section>

    <section class="section section-compact">
      <div class="section-header">
        <h2>Interests</h2>
        <div class="section-rule"></div>
      </div>
      <div class="simple-line">${esc(interests)}</div>
    </section>

  </div>
</body>
</html>
`;

writeFileSync(outPath, html, 'utf8');
console.log(`Generated ${outPath} from src/data/cv.ts (${roles.length} roles, ${skillCategories.length} skill groups)`);
