import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';
import { getAllPostsMetadata } from '@/lib/posts';

/**
 * Home page for the GlamorousDesi storefront. Displays a hero section,
 * a product grid of featured products and a preview of recent blog posts.
 */
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>GlamorousDesi – Indian Ethnic Wear</title>
        <meta name="description" content="Shop curated Indian ethnic wear for weddings and celebrations." />
      </Head>
      <HeroSection />
      <section style={{ marginTop: '3rem' }}>
        <h2>Featured Products</h2>
        <ProductGrid />
      </section>
      <section className="blog-preview">
        <h2>Latest Wedding Styling Tips</h2>
        {posts.slice(0, 2).map((post) => (
          <article key={post.slug}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
          </article>
        ))}
        <p>
          <Link href="/blog">
            <a>Read all articles →</a>
          </Link>
        </p>
      </section>
    </>
  );
}

/**
 * Fetches metadata for blog posts at build time. Using static generation
 * improves performance and SEO for the home page. If there are no posts,
 * returns an empty array.
 */
export async function getStaticProps() {
  const posts = await getAllPostsMetadata();
  return {
    props: {
      posts,
    },
  };
}
