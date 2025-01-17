import { Circle } from 'lucide-react';
import { JSX } from 'react';

const AboutGrid = ({
  icon,
  name,
  answer,
  children,
}: {
  name: string;
  answer?: string;
  icon: JSX.Element;
  children?: JSX.Element;
}) => {
  return (
    <div className="grid grid-rows-2 gap-2">
      <span className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
        {icon}
        {name.split('').join(' ')}
      </span>

      {children || (
        <span className="flex items-center gap-2 col-span-2 justify-center">
          <Circle className="size-3" /> {answer}
        </span>
      )}
    </div>
  );
};

export default AboutGrid;
