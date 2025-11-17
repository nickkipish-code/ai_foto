/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'lh3.googleusercontent.com'],
    unoptimized: true,
  },
  // Разрешить cross-origin запросы с локальной сети в режиме разработки
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.1.102:3000',
    // Можно добавить другие IP адреса локальной сети при необходимости
  ],
}

module.exports = nextConfig

