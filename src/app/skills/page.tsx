import H2Title from '@/components/H2Title';
import Badge from '@/ui/Badge';
import { Lightbulb } from 'lucide-react';

const introduce =
  'Currently i am a fresher and i have a solid understand of HTML5, CSS3, JS, TS and React, including responsive design principles. I specialize in building web applications and sites using Javascript, Typescript, React, Nextjs & Node.';

const Page = () => {
  return (
    <div className="space-y-4">
      <Badge icon={<Lightbulb className="size-5" />} text="我的技能" />
      <H2Title>我的专业技能</H2Title>

      <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
        {introduce}.
      </p>

      <ol className="grid"></ol>
    </div>
  );
};

export default Page;
