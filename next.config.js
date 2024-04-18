/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'ezkn3ssmpovpqgcn.public.blob.vercel-storage.com',
            }
        ]
    }
}

module.exports = nextConfig
