import { cn } from '@/lib/utils';
import { Facebook, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const links = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/shahina.khatun.1044',
    icon: <Facebook className="size-[24px]" />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/Taquiimam14',
    icon: <Twitter className="size-[24px]" />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/taqui-imam',
    icon: <Linkedin className="size-[24px]" />,
  },
  {
    name: 'External',
    link: 'https://tinyurl.com/MdTaquiImam',
    icon: <ExternalLink className="size-[24px]" />,
  },
];

const SocialLinks = () => {
  return (
    <div className={cn('h-fit w-full p-4 flex space-x-4')}>
      {links.map(({ name, link, icon }) => (
        <Link
          key={name}
          href={link}
          className="size-[40px] bg-[transparent] hover:bg-[#fff] rounded-md border-[1px] border-[#272B38] flex justify-center items-center"
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
