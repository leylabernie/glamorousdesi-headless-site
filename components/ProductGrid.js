/**
 * A simple product grid that displays a handful of sample products. In a
 * production application you would fetch product data from your headless
 * commerce backend (e.g. Shopify Storefront API) and hydrate this component
 * with real product images, titles and prices.
 */
export default function ProductGrid() {
  // Sample static products. Replace these with real data from your backend.
  const products = [
    {
      id: 'lehenga',
      name: 'Red Bridal Lehenga',
      price: 199.99,
    },
    {
      id: 'saree',
      name: 'Silk Saree with Zari Work',
      price: 149.99,
    },
    {
      id: 'sherwani',
      name: 'Golden Sherwani Set',
      price: 249.99,
    },
    {
      id: 'accessories',
      name: 'Kundan Jewelry Set',
      price: 89.99,
    },
  ];
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #eee',
            borderRadius: '0.5rem',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          {/* Placeholder box for product image */}
          <div
            style={{
              background: '#f2f2f2',
              width: '100%',
              height: '150px',
              borderRadius: '0.25rem',
              marginBottom: '1rem',
            }}
          />
          <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
          <p style={{ fontWeight: 600 }}>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
