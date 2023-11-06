import nextra from 'nextra';
import elementPlugin from './src/plugins/remark/element.mjs';

/** @type {import('nextra').NextraConfig} */
const config = {
  mdxOptions: {
    remarkPlugins: [elementPlugin]
  },
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
};

const withNextra = nextra(config);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true
};

export default withNextra(nextConfig);
