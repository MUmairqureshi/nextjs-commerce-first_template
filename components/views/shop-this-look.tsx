import Image from 'next/image';
import ItemLook from './item-look';
import shop_by_look_right from '/components/images/shop_by_look_right.png';
import { getCollectionProducts } from 'lib/shopify';

export const ShopLook = ({ item, thirdProduct, secondProduct, fourProduct, priority }: any) => {
  return (
    <section className="py-20">
      <div className="mb-16 text-center text-2xl font-bold md:text-4xl">Shop By Look</div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <ItemLook
            priority={priority}
            item={item}
            secondProduct={secondProduct}
            fourProduct={fourProduct}
          />
        </div>
        <div className="flex-1">
          <img src={thirdProduct.featuredImage.url} alt="product image"></img>
        </div>
      </div>
    </section>
  );
};
export async function ShopThisLook() {
  const homepageItems = await getCollectionProducts({
    collection: 'all-Shop-this-look'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2] || !homepageItems[3]) return null;

  const [firstProduct, secondProduct, thirdProduct, fourProduct] = homepageItems;

  return (
    <section>
      <ShopLook
        fourProduct={fourProduct}
        secondProduct={secondProduct}
        thirdProduct={thirdProduct}
        item={firstProduct}
        priority={true}
      />
    </section>
  );
}
