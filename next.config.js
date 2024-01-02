/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
    distDir: 'out',
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = nextConfig;