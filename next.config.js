/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
              port: '',
              pathname: '/asdiop159752/BlogPost/master/images/**',
            },
            {
              hostname:"images.unsplash.com"
            },
            {
              hostname:"www.simplilearn.com"
            },
            {
              hostname:"www.google.com",
            }
          ],
    },
      experimental: {
        appDir: true,
      },
}

module.exports = nextConfig
