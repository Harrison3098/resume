import H2Title from '@/components/H2Title';
import Badge from '@/ui/Badge';
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import pngVite from '../../../public/brand-vite.1024x978.png';
import pngCss from '../../../public/css.png';
import pngD3 from '../../../public/d3js-original.1024x971.png';
import pngES6 from '../../../public/es6.1024x1024.png';
import pngNginx from '../../../public/file-type-nginx.896x1024.png';
import pngGit from '../../../public/github-text.921x1024.png';
import pngHTML from '../../../public/html.png';
import pngJs from '../../../public/js.png';
import pngLeaflet from '../../../public/leaflet.png';
import pngMapbox from '../../../public/mapbox.1024x1024.png';
import pngNext from '../../../public/next-js.1024x1024.png';
import pngNode from '../../../public/node-js.909x1024.png';
import pngNuxt from '../../../public/nuxtjs.1024x686.png';
import pngOpenLayers from '../../../public/openlayers.1016x1024.png';
import pngReact from '../../../public/react.png';
import pngScss from '../../../public/scss.png';
import pngTailwind from '../../../public/tailwind-css.1024x615.png';
import pngTypescript from '../../../public/typescript-icon.1024x1024.png';
import pngTurf from '../../../public/turf.png';
import pngVue from '../../../public/vue.1024x883.png';
import pngWebpack from '../../../public/webpack-original.922x1024.png';
import pngUniApp from '../../../public/uni-app.png';
import pngECharts from '../../../public/ECharts.png';
import pngAntV from '../../../public/antv.png';

const introduce =
  '我熟练掌握 Vue、React Hooks、TypeScript 等前端技术，擅长 WebGIS 开发、大屏及数据可视化；精通多种地图引擎与 SDK，能运用各类 CSS 技术及工具构建响应式布局，基于 SSR/SSG 模式开发 Web 应用、进行小程序与移动端开发。';

const skills = [
  { name: 'Vue', png: pngVue },
  { name: 'React', png: pngReact },
  { name: 'CSS3', png: pngCss },
  { name: 'HTML5', png: pngHTML },
  { name: 'JavaScript', png: pngJs },
  { name: 'Typescript', png: pngTypescript },
  { name: 'ES6', png: pngES6 },

  { name: 'Scss', png: pngScss },
  { name: 'Tailwind CSS', png: pngTailwind },
  { name: 'Git', png: pngGit },
  { name: 'Next.js', png: pngNext },
  { name: 'Nuxt.js', png: pngNuxt },
  { name: 'Webpack', png: pngWebpack },
  { name: 'Vite', png: pngVite },

  { name: 'D3.js', png: pngD3 },
  { name: 'Turf.js', png: pngTurf },
  { name: 'MapboxGL', png: pngMapbox },
  { name: 'OpenLayers', png: pngOpenLayers },
  { name: 'Leaflet', png: pngLeaflet },
  { name: 'Node.js', png: pngNode },
  { name: 'Nginx', png: pngNginx },
  { name: 'uni-app', png: pngUniApp },
  { name: 'ECharts', png: pngECharts },
  { name: 'AntV', png: pngAntV },
];

const Page = () => {
  return (
    <div className="space-y-4 w-full max-h-full">
      <Badge icon={<Lightbulb className="size-5" />} text="我的技能" />
      <H2Title>我的专业技能</H2Title>

      <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
        {introduce}.
      </p>

      <ol className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-cols-8">
        {skills.map(({ name, png }) => (
          <li
            key={name}
            className="w-full flex flex-col items-center justify-center p-4 rounded-lg hover:bg-accent transition-colors space-y-2"
          >
            <div className="w-full max-h-20 max-w-20 flex justify-center items-center flex-1">
              <Image src={png} alt={name} className="h-auto w-full" />
            </div>
            <span>{name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Page;
