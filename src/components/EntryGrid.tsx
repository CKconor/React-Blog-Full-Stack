import type { ReactNode } from 'react';

function EntryGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">{children}</div>;
}

export default EntryGrid;
