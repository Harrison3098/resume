import AboutGrid from '@/components/AboutGrid';
import H2Title from '@/components/H2Title';
import { cn } from '@/lib/utils';
import Badge from '@/ui/Badge';
import { Dna, Globe2, School, User2, Heart, Circle } from 'lucide-react';

const bornYear = 1999;
const age = new Date().getFullYear() - bornYear;

const items = [
  {
    name: '年龄',
    answer: age.toString(),
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

const Page = () => {
  return (
    <div className={cn('space-y-4 w-full')}>
      <Badge icon={<User2 className="size-5" />} text="关于我" />
      <H2Title>
        Web前端开发工程师
        <br />
        拥有四年从业经验
      </H2Title>

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

export default Page;
