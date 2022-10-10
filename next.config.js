const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: { urlPrefix },
}

module.exports = nextConfig
