import DateLine from '@/components/DateLine';
import H2Title from '@/components/H2Title';
import Badge from '@/ui/Badge';
import { Lightbulb } from 'lucide-react';

const courses = [
  {
    beginDate: '2022.03',
    endDate: '2025.06',
    major: '工商管理',
    school: '暨南大学',
    desc: '占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder',
  },
  {
    beginDate: '2018.09',
    endDate: '2021.07',
    major: '计算机应用',
    school: '顺德职业技术学院',
    desc: '占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder占位文本placeholder',
  },
];

const Page = () => {
  return (
    <div className="space-y-4 w-full">
      <Badge icon={<Lightbulb className="size-5" />} text="教育背景" />
      <H2Title>我的求学历程</H2Title>

      {courses
        .sort((a, b) => parseFloat(b.beginDate) - parseFloat(a.beginDate))
        .map((item, idx) => (
          <DateLine
            {...item}
            key={item.school}
            direction={idx % 2 ? 'right' : 'left'}
          />
        ))}
    </div>
  );
};

export default Page;
