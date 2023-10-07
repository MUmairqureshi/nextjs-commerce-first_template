// import Hero from "@/components/Home/hero";
import ChooseUs from 'components/Home/ChooseUs';
import { FeaturedProduct } from 'components/Home/featuredProduct';
import { SpecialEdition } from 'components/Home/specialEdition';
import Wrapper from 'components/Wrapper';
import { Hero } from 'components/views/hero';

import LogoRotator from 'components/views/logo-rotator';
import ProductList from 'components/views/product-list';
import { Sales } from 'components/views/sales-component';
import { ShopByCategory } from 'components/views/shop-by-category';
import { ShopThisLook } from 'components/views/shop-this-look';
export const runtime = 'edge';
// import Layout from "@/components/layout/layout";
const Home = () => {
  return (
    // <Layout>
    <div>
      <Hero />
      <Wrapper>
        <LogoRotator />
        <ProductList />
        <Sales />
        <ShopByCategory />
        <ShopThisLook />
      </Wrapper>
      <div className="flex w-full justify-center bg-background">
        <div className="flex w-full flex-col items-center ">
          <div className={`w-full max-w-screen-xl bg-image bg-fixed bg-no-repeat object-cover`}>
            <FeaturedProduct />
            <SpecialEdition />
            <ChooseUs bgColor="background" />
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
      {/* <Button>Click me</Button> */}
    </div>

    // </Layout>
  );
};

export default Home;
