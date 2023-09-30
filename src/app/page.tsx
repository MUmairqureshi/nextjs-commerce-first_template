import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import { Button } from 'src/components/ui/button';
// import Blog from 'components/blog';

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
      {/* <div>
        <Button>Click me</Button>
      </div> */}
      {/* <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense> */}

      {/* <Blog /> */}
    </>
  );
}
