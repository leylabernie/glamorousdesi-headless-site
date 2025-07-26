import Head from 'next/head';
import { getPostBySlug, getAllPostsMetadata } from '@/lib/posts';

/**
 * Renders a single blog post. Uses Next.js static generation to build
 * pages for each post at build time. If a post is not found, returns
 * a 404 page.
 */
export default function Post({ post }) {
  if (!post) {
    return <p>Post not found.</p>;
  }
  return (
    <article>
      <Head>
        <title>{post.title} – GlamorousDesi Blog</title>
      </Head>
      <h1>{post.title}</h1>
      {post.date && <p style={{ color: '#666', fontSize: '0.9rem' }}>{new Date(post.date).toLocaleDateString()}</p>}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPostsMetadata();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}
