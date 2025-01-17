'use client';

import Dock from '@/components/Dock';
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail,
  MoreHorizontal,
  User,
} from 'lucide-react';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const dockItem = [
  {
    title: 'Home',
    icon: <HomeIcon className="size-[20px]" />,
    href: '/',
  },
  {
    title: 'About',
    icon: <User className="size-[20px]" />,
    href: '/about',
  },
  {
    title: 'Skills',
    icon: <Briefcase className="size-[20px]" />,
    href: '/skills',
  },
  {
    title: 'Education',
    icon: <GraduationCap className="size-[20px]" />,
    href: '/education',
  },
  {
    title: 'Projects',
    icon: <FolderGit2 className="size-[20px]" />,
    href: '/projects',
  },

  {
    title: 'Contact us',
    icon: <Mail className="size-[20px]" />,
    href: '/contact',
  },
  {
    title: 'More',
    icon: <MoreHorizontal className="size-[20px]" />,
    href: '/more',
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] ${scrolling ? 'hidden' : 'block'}`}
    >
      <Dock column={dockItem} activeKey={pathname} />
    </div>
  );
};

export default Navbar;
