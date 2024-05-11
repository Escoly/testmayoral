/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'assets.mayoral.com',
            port: '',
        }]
    }
};

export default nextConfig;
