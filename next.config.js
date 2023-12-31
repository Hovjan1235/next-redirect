/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    async redirects() {
        if(process.env.REDIRECT === 'true') {
          return [
            {
              source: '/:path*',
              has: [
                {
                  type: 'header',
                  key: 'referer',
                  value: '(.*facebook.*)'
                },
                {
                  type: 'header',
                  key: 'User-Agent',
                  value: '(^((?!Facebot|facebookexternalhit|facebookcatalog|FacebookExternalHit).)*$)'
                }
              ],
              permanent: true,
              basePath: false,
              destination: `${process.env.REDIRECT_DOMAIN}/:path*`
            },
          ]
        } else {
          return []
        }
      },
    };

module.exports = nextConfig
