import { cn } from '@/lib/utils';
import { Github, Smartphone, MessageCircleMore, AtSign } from 'lucide-react';
import Link from 'next/link';

const links = [
  {
    name: 'WeChat',
    link: 'https://weixin.qq.com',
    icon: <MessageCircleMore className="size-[24px]" />,
  },
  {
    name: 'Smartphone',
    link: 'https://www.10086.cn',
    icon: <Smartphone className="size-[24px]" />,
  },
  {
    name: 'Email',
    link: 'https://outlook.live.com/mail/?authredirect=true',
    icon: <AtSign className="size-[24px]" />,
  },
  {
    name: 'Github',
    link: 'https://github.com/Harrison3098',
    icon: <Github className="size-[24px]" />,
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
