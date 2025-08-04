const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    basePath: "/my-portfolio",
    assetPrefix: "/my-portfolio/",
  }),
};

module.exports = nextConfig;
