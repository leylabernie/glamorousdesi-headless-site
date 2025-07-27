import Link from 'next/link';

/**
 * Provides a simple layout wrapper with a header, main content area and
 * footer. Navigation links in the header allow users to explore the
 * storefront. You can extend this component to include branding, a logo
 * or a responsive navigation menu as needed.
 */
export default function Layout({ children }) {
  return (
    <>
      <header
        style={{
          padding: '1rem',
          borderBottom: '1px solid #eee',
          marginBottom: '2rem',
        }}
      >
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/collections/all">Shop All</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/account">Account</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>
      <main style={{ padding: '0 1rem', minHeight: '60vh' }}>{children}</main>
      <footer
        style={{
          padding: '2rem 1rem',
          borderTop: '1px solid #eee',
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        <p>&copy; {new Date().getFullYear()} GlamorousDesi. All rights reserved.</p>
      </footer>
    </>
  );
}
