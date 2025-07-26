import Head from 'next/head';
import ProductGrid from '@/components/ProductGrid';

/**
 * Collections page showing all products. In a complete implementation
 * you would fetch collection data from Shopify; here we reuse the
 * ProductGrid component as a placeholder.
 */
export default function AllCollections() {
  return (
    <>
      <Head>
        <title>Shop All – GlamorousDesi</title>
      </Head>
      <h1>All Products</h1>
      <ProductGrid />
    </>
  );
}
