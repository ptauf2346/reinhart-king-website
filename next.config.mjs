/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '3.145.157.159',
                port: '8090',
                pathname: '/api/files/**',
            },
            {
                protocol: 'http',
                hostname: 'anchorsofacademia.org',
                port: '8090',
                pathname: '/api/files/**',
            },
        ],
    },
};

export default nextConfig;
