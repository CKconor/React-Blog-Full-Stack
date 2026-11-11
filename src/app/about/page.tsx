import type { Metadata } from 'next';
import ExperienceGrid from '@/components/ExperienceGrid';
import PageIntro from '@/components/PageIntro';
import Section from '@/components/Section';
import { profile, summary, interests } from '@/data/cv';
import { socialLinks } from '@/data/site';

const title = 'About — Conor Kemp';
const description = summary;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function About() {
  return (
    <>
      <PageIntro title={profile.name} lead={profile.title} showPortrait />

      <Section title="Experience" stagger={3}>
        <p className="max-w-xl text-description text-ink-11">{summary}</p>
      </Section>

      <Section title="Work history" stagger={4}>
        <ExperienceGrid />
      </Section>

      <Section title="Personal" stagger={5}>
        <p className="max-w-xl text-description text-ink-11">{interests}</p>
      </Section>

      <Section title="Links" stagger={6}>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="pill">
              {label}
              <svg
                className="w-3.5 h-3.5 text-ink-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
