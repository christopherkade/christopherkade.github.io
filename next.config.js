const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = "";

// if (isGithubActions) {
//   // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

//   // basePath = `/`;

//   console.log("865 --- BASE PATH", basePath);
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath,
};

module.exports = nextConfig;
