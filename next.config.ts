import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    experimental: {
        mdxRs: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    output: 'export',

    // ✅ 关键 2：Cloudflare 不支持 Next Image 优化
    images: {
        unoptimized: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);