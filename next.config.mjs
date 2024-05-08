/** @type {import('next').NextConfig} */
const nextConfig = {
      images:{
            remotePatterns:[
                  {
                        hostname:"placehold.co"
                  },
                  {
                        hostname:"cdn.myanimelist.net"
                  }
            
            ]
      }
};

export default nextConfig;
