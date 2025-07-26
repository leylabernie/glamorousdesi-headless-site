import Head from 'next/head';
import Link from 'next/link';
import { getAllPostsMetadata } from '@/lib/posts';

/**
 * Blog index page listing all wedding styling articles. Utilises static
 * generation for improved performance and SEO. Posts are sorted in
 * descending date order.
 */
export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Wedding Styling Tips – GlamorousDesi Blog</title>
      </Head>
      <h1>Wedding Styling Tips</h1>
      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: '2rem' }}>
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          {post.date && <p style={{ color: '#666', fontSize: '0.9rem' }}>{new Date(post.date).toLocaleDateString()}</p>}
          <p>{post.excerpt}</p>
        </article>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsMetadata();
  return { props: { posts } };
}
