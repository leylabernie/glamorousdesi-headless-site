/**
 * Next.js configuration for the GlamorousDesi headless storefront.
 *
 * We enable strict mode and configure images to allow Shopify assets.  
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
};

module.exports = nextConfig;
