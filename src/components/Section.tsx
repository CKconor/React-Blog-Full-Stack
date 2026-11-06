import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  /** Position in the page's entrance, 1 to 8. */
  stagger: number;
  children: ReactNode;
};

function Section({ title, stagger, children }: SectionProps) {
  return (
    <section className={`enter stagger-${stagger} py-8`}>
      <h2 className="mb-6">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
