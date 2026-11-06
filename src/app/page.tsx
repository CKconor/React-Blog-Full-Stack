import Contact from '@/components/Contact';
import ExperienceGrid from '@/components/ExperienceGrid';
import PageIntro from '@/components/PageIntro';
import Section from '@/components/Section';
import Skills from '@/components/Skills';
import { heroBlurb, profile } from '@/data/cv';

export default function Home() {
  return (
    <>
      <PageIntro title={profile.name} lead={profile.title} description={heroBlurb} showPortrait>
        <Contact />
      </PageIntro>
      <Section title="Experience" stagger={4}>
        <ExperienceGrid linkToAbout />
      </Section>
      <Section title="Skills" stagger={5}>
        <Skills />
      </Section>
    </>
  );
}
