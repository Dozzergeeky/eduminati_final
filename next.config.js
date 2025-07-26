// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Change to standalone for better deployment compatibility
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add server external packages for better build stability
  serverExternalPackages: ['mongoose'],
};

module.exports = nextConfig;


