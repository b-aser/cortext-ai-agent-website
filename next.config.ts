// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static HTML export (required for GitHub Pages)
  basePath: isProd ? '/cortext-ai-agent-website' : '',
  assetPrefix: isProd ? '/cortext-ai-agent-website/' : '',
  images: {
    unoptimized: true,     // GitHub Pages can't run Next.js image optimization
  },
};

export default nextConfig;
