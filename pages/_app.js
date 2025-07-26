import '@/styles/globals.css';
import Layout from '@/components/Layout';

// The custom App component wraps each page with our Layout component.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
