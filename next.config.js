/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: "/~aly",
  publicRuntimeConfig: {
    basePath: "/~aly",
  },
  basePath: "/~aly",
}

module.exports = nextConfig
