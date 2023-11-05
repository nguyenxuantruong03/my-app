/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        output: 'export',
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
            },
            {
              hostname:"bathanh.com.vn",
            },
            {
              hostname: "img.clerk.com",
            },
            {
              hostname:"https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg",
            }
          ],
    },
      experimental: {
        appDir: true,
      },
}

module.exports = nextConfig
