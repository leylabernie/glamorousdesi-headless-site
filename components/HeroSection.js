import Link from 'next/link';

/**
 * A visually striking hero section to welcome visitors to the storefront. It
 * highlights the brand promise and encourages users to browse the
 * collections. Feel free to refine the copy or styling to align with your
 * brand identity.
 */
export default function HeroSection() {
  return (
    <section
      style={{
        padding: '4rem 1rem',
        background: '#f8f4ef',
        textAlign: 'center',
        borderRadius: '0.5rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Curated Indian Ethnic Wear
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Discover the perfect outfit for your wedding or celebration.
      </p>
      <Link href="/collections/all">
        <a
          style={{
            padding: '0.75rem 1.5rem',
            background: '#c69c6d',
            color: '#fff',
            borderRadius: '0.25rem',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Shop Now
        </a>
      </Link>
    </section>
  );
}
