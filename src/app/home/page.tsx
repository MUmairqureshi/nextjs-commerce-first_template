// import Hero from "@/components/Home/hero";
import ChooseUs from 'components/Home/ChooseUs';
import FeaturedProduct from 'components/Home/featuredProduct';
import SpecialEdition from 'components/Home/specialEdition';
import Wrapper from 'components/Wrapper';
import { Hero } from 'components/views/hero';

import img from 'components/images/SpecEdi_Bg.png';
import LogoRotator from 'components/views/logo-rotator';
import ProductList from 'components/views/product-list';
import { Sales } from 'components/views/sales-component';
import { ShopByCategory } from 'components/views/shop-by-category';
import { ShopThisLook } from 'components/views/shop-this-look';
import Image from 'next/image';
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
      {/* <div className="flex w-full h-full justify-center bg-background"> */}
      <div className="relative flex h-full  w-full  flex-col items-center ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className={`absolute z-40 h-full w-full max-w-screen-xl bg-fixed bg-no-repeat object-cover brightness-50 filter`}
          alt="bg-image"
        />
        <div className="absolute left-0 top-0 h-full w-full">
          <FeaturedProduct />
          <SpecialEdition />
          <ChooseUs bgColor="background" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
