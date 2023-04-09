/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:  ['ipfs.infura.io', 'th.bing.com', 'ipfs.infura.io:5001']
   }
}

module.exports = nextConfig
