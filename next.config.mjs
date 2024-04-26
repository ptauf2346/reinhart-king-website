/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'anchorsofacademia.org',
                port: '',
                pathname: '/api/files/**',
            },
        ],
    },
};

export default nextConfig;
