import Navbar from 'components/layout/navbar';
import Home from './home/page';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
