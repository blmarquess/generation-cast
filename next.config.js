/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com"],
  }
}

module.exports = nextConfig
