import type { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="surface-panel">
      <div id="skip" className="box-content max-w-read mx-auto px-5 md:px-8 pb-8">
        {children}
      </div>
    </div>
  );
}

export default Container;
