import Wrapper from 'components/Wrapper';
import Hero from 'components/views/hero';
import LogoRotator from 'components/views/logo-rotator';
import ProductList from 'components/views/product-list';
import { Sales } from 'components/views/sales-component';
import { ShopByCategory } from 'components/views/shop-by-category';
import { ShopThisLook } from 'components/views/shop-this-look';

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
      <div>
        <Hero />
        <Wrapper>
          <LogoRotator />
          <ProductList />
          <Sales />
          <ShopByCategory />
          <ShopThisLook />
        </Wrapper>
        {/* <Carousel /> */}
        {/* <Button>Click me</Button> */}
      </div>
      {/* <ThreeItemGrid />
      <Suspense>

        <Suspense>
          <Footer />
        </Suspense>
      </Suspense> */}
    </>
  );
}
