import Head from 'next/head';

/**
 * Account page placeholder. Normally you would integrate Shopify’s
 * customer accounts or a custom authentication provider. For now it simply
 * explains where account functionality would live.
 */
export default function Account() {
  return (
    <>
      <Head>
        <title>Account – GlamorousDesi</title>
      </Head>
      <h1>Account</h1>
      <p>Customer account features are not implemented in this skeleton. You
        can integrate Shopify’s customer API or another auth provider to
        allow users to sign up, log in and manage their orders.</p>
    </>
  );
}
