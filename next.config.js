/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
    distDir: 'out',
    output: 'export'
};

module.exports = nextConfig;