import { ArrowUpRight } from 'lucide-react';

type Product = {
  title: string;
  desc: string;
  technologyStack: string[];
};

const ProjectCard = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
      {products.map((item) => (
        <ProjectCardItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ProjectCard;

const ProjectCardItem = ({ title, desc, technologyStack }: Product) => {
  return (
    <div className="max-w-[32%] min-h-[345px] max-lg:max-w-full rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h3>

      <p className="text-base font-poppins">{desc}</p>

      <div className="flex flex-wrap items-center justify-around gap-2">
        {technologyStack.map((text) => (
          <SkillBadge text={text} key={text} />
        ))}
      </div>

      <a
        href=""
        className="mx-auto w-fit active:scale-95 items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md flex"
      >
        访问项目(暂无)
        <ArrowUpRight className="size-5 ml-1" />
      </a>
    </div>
  );
};

const SkillBadge = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800  ">
      {text}
    </span>
  );
};
