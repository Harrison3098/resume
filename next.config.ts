import type { NextConfig } from 'next';

const isPRO = process.env.NODE_ENV === 'production';
const warehouseName = 'resume';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: isPRO ? `/${warehouseName}` : '',
  basePath: isPRO ? `/${warehouseName}` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
