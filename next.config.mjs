/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL('https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1583354208344')
        ],
    }
};

export default nextConfig;
