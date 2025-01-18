import H2Title from '@/components/H2Title';
import ProjectCard from '@/components/ProjectCard';
import Badge from '@/ui/Badge';
import { Layers } from 'lucide-react';

const introduce =
  '我参与的项目主要源于任职公司，集中在电力电网和GIS地图领域。此外，我在电商商城、中后台系统以及小程序开发等方面，也积累了丰富的实战经验 。';

const products = [
  {
    title: '南网智瞰一张图',
    technologyStack: ['MapboxGL', 'VuePress', 'TypeScript', 'Vue'],
    desc: '南网智瞰是南方电网基于数字孪生技术构建的智能化数字平台，融合多维度数据实现“全网一张图”，并荣获多项行业大奖，彰显其在数字电网领域的领先地位。其中，WebGIS API 是南网智瞰一张图的核心底层技术支撑，提供丰富功能模块，为平台实现精准的空间数据处理和动态可视化奠定基础。',
  },
  {
    title: '国网电力电网资源管理平台',
    technologyStack: ['MapboxGL', 'AntV', 'D3.js', 'Vue', 'Echarts'],

    desc: '依托底座式数据中心，以高精度的通用地图为基础，实现地理、物理、管理信息的融合及全域资产的可视化管理。',
  },
  {
    title: '广东应急指挥中心平台',
    technologyStack: ['MapboxGL', 'VuePress', 'TypeScript', 'Vue2'],
    desc: '构建覆盖山火、覆冰、洪涝、台风、气象、用户诉求、车辆调度、工单管理等模块的综合监控平台，为日常预警与灾害响应提供全面支持。',
  },
  {
    title: '广东新型电力系统数字孪生平台',
    technologyStack: ['MapboxGL', 'VuePress', 'TypeScript', 'Vue2'],
    desc: '基于南网智瞰、智瞰微应用、量测数据中心和数网魔方，构建网测个性化综合平台。平台整合动态量测、供给统计、物联网设备接入和外部气象数据，全面支持电力系统的只能监测与动态分析',
  },
  {
    title: '贵州供电局 GIS 综合平台开发',
    technologyStack: ['MapboxGL', 'Tailwind CSS', 'Nuxt.js', 'Turf.js'],
    desc: '围绕用户诉求、市场营销、工单管理及业务指标等维度，构建快速响应和数据统计分析的平台，涵盖遵义、六盘水、凯里三个地市供电所 GIS 系统 和 OMS 综合服务平台。',
  },
  {
    title: '广东人口流动监控系统',
    technologyStack: ['MapboxGL', 'VuePress', 'TypeScript', 'Vue2'],
    desc: '基于南网智瞰、智瞰微应用、量测数据中心和数网魔方，构建网测个性化综合平台。平台整合动态量测、供给统计、物联网设备接入和外部气象数据，全面支持电力系统的只能监测与动态分析',
  },
];

const Page = () => {
  return (
    <div className="space-y-4 w-full max-h-full">
      <Badge icon={<Layers className="size-5" />} text="项目" />
      <H2Title>我的项目经验</H2Title>

      <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
        {introduce}
      </p>

      <ProjectCard products={products} />
    </div>
  );
};

export default Page;
