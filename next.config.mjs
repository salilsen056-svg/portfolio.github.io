const basePath = process.env.GITHUB_PAGES === 'true' ? '/portfolio.github.io' : '';
export default {
  output: 'export',
  basePath,
  images: { unoptimized: true },
};
