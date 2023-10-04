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
      <Home />
      {/* <div>
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
      {/* </div> */}
      {/* <ThreeItemGrid />
      <Suspense>

        <Suspense>
          <Footer />
        </Suspense>
      </Suspense> */}
    </>
  );
}
