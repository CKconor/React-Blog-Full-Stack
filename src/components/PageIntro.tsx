import type { ReactNode } from 'react';
import Portrait from '@/assets/portrait.png';

type PageIntroProps = {
  title: string;
  lead?: string;
  description?: string;
  showPortrait?: boolean;
  children?: ReactNode;
};

function PageIntro({ title, lead, description, showPortrait = false, children }: PageIntroProps) {
  return (
    <div className="flex items-start justify-between gap-12 pt-12 pb-8">
      <div className="flex-1 max-w-xl">
        <h1 className="enter">{title}</h1>
        {lead && <p className="enter stagger-1 text-title text-ink-11 mt-2">{lead}</p>}
        {description && <p className="enter stagger-2 text-description text-ink-11 mt-1.5">{description}</p>}
        {children && <div className="enter stagger-3 mt-6">{children}</div>}
      </div>
      {showPortrait && (
        <img
          src={Portrait.src}
          alt="Conor Kemp"
          className="enter stagger-3 hidden md:block w-40 shrink-0 grayscale"
        />
      )}
    </div>
  );
}

export default PageIntro;
