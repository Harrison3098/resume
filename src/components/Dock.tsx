import { cn } from '@/lib/utils';
import Link from 'next/link';
import { JSX } from 'react';

const Dock = ({
  column,
  activeKey,
}: {
  column: DockColumnItem[];
  activeKey: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-nowrap space-x-4 bg-[#F9FAFB] p-4 rounded-l-full rounded-r-full'
      )}
    >
      {column.map(({ title, href, icon }) => (
        <Link key={title} href={href}>
          <DockIcon icon={icon} isActive={activeKey === href} />
        </Link>
      ))}
    </div>
  );
};

const DockIcon = ({
  icon,
  isActive,
}: {
  icon: JSX.Element;
  isActive: boolean;
}) => {
  return (
    <div
      className={cn(
        'size-[40px] rounded-full bg-[#E5E7EB] flex justify-center items-center',
        isActive && 'bg-gray-100 border border-[#e5e7eb] text-[#2f7df4]'
      )}
    >
      {icon}
    </div>
  );
};

export default Dock;

type DockColumnItem = {
  title: string;
  icon: JSX.Element;
  href: string;
};
