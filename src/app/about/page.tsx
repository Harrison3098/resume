import AboutGrid from '@/components/AboutGrid';
import { cn } from '@/lib/utils';
import { Dna, Globe2, School, User2, Heart, Circle } from 'lucide-react';

const items = [
  {
    name: '年龄',
    answer: '26',
    icon: <Dna className="size-8" />,
  },
  {
    name: '籍贯',
    answer: '广东佛山',
    icon: <Globe2 className="size-8" />,
  },
  { name: '学历', answer: '大专', icon: <School className="size-8" /> },
];
const hobbies = ['麻将', '滑板', '电影', '电玩'];
const introduce =
  '我是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个是一个';

const page = () => {
  return (
    <div className={cn('space-y-4 w-full')}>
      <div className="size-fit py-1 px-2 bg-[#272B38] rounded-l-full rounded-r-full text-white flex space-x-2 justify-center items-center cursor-pointer hover:bg-[#292D3A]">
        <User2 className="size-[20px]" />
        <span>关于我</span>
      </div>

      <h2
        className={cn(
          'font-poppins text-primary font-bold text-4xl name_underline max-sm:text-2xl'
        )}
      >
        Web前端开发工程师
      </h2>

      <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
        {introduce}.
      </p>

      <div className={cn('flex justify-between')}>
        {items.map((item) => (
          <AboutGrid {...item} key={item.name} />
        ))}
      </div>
      <AboutGrid name="爱好" icon={<Heart className="size-8" />}>
        <ol className="flex space-x-8">
          {hobbies.map((t) => (
            <li className="flex space-x-2 items-center" key={t}>
              <Circle className="size-3" />
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </AboutGrid>
    </div>
  );
};

export default page;
