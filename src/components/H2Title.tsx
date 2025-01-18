import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const H2Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={cn(
        'font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl'
      )}
    >
      {children}
    </h2>
  );
};

export default H2Title;
