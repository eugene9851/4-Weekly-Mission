/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["codeit-front.s3.ap-northeast-2.amazonaws.com", "codeit-images.codeit.com",
      "www.shutterstock.com", "jasonwatmore.com"]
  }
}

module.exports = nextConfig
