  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.afdb.org',
          
        },
        {
          protocol: 'https',
          hostname: 'www.tracedirecte.com',
          
        },
       
      ],
      },
      
    };
    export default nextConfig;


  
 