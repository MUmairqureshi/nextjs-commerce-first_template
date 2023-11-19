/* eslint-disable react/no-children-prop */
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
import { getCollection, getCollectionProducts } from 'lib/shopify';
export const runtime = 'edge';

const Home = async () => {
  const homepageItems = await getCollectionProducts({
    collection: 'All-limited-time-offer'
  });

  const [firstProduct] = homepageItems;

  const men = await getCollection('men_category');
  const women = await getCollection('women_category');
  const children = await getCollection('child_category');

  return (
    <div>
      <Hero />
      <Wrapper>
        <LogoRotator />
        <ProductList men={men} women={women} children={children} />
        <Sales />
        <ShopByCategory />
        <ShopThisLook />
      </Wrapper>

      <div
        style={{ backgroundImage: `url(${firstProduct?.featuredImage.url})` }}
        className="w-full bg-cover bg-fixed bg-center bg-no-repeat "
      >
        <FeaturedProduct />

        <SpecialEdition SpecialEdition={firstProduct} />
        <ChooseUs bgColor="background" />
      </div>
    </div>
  );
};

export default Home;
