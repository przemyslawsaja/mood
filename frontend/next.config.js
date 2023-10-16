/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    }, {
      test: /\.mp3$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds', // Adjust the path as needed
            outputPath: 'static/sounds/', // Adjust the path as needed
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  }
};

module.exports = nextConfig;
