'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-primary z-[9999] shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.2)]"
      style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
      aria-hidden="true"
    />
  );
}
