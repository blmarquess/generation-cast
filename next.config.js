/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com"],
  }
}

module.exports = nextConfig
