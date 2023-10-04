import { getCollectionProducts } from 'lib/shopify';
import MovingProducts from './moving-products';

export const Category = ({
  childrenjogerfirstProduct,
  childrentshirtfirstProduct,
  childrenfirstProduct,
  accessoriesfirstProduct,
  mensshirtfirstProduct,
  womenshirtfirstProduct,
  womentrouserfirstProduct
}: any) => {
  return (
    <div className="py-10">
      <div className="mb-16 text-center text-2xl font-bold md:text-4xl">Shop By Categories</div>
      <MovingProducts
        childrenjogerfirstProduct={childrenjogerfirstProduct}
        childrentshirtfirstProduct={childrentshirtfirstProduct}
        childrenfirstProduct={childrenfirstProduct}
        accessoriesfirstProduct={accessoriesfirstProduct}
        mensshirtfirstProduct={mensshirtfirstProduct}
        womenshirtfirstProduct={womenshirtfirstProduct}
        womentrouserfirstProduct={womentrouserfirstProduct}
      />
    </div>
  );
};

export async function ShopByCategory() {
  // Collections that start with `hidden-*` are hidden from the search page.

  const womentrouser = await getCollectionProducts({
    collection: 'All-women-Trouser'
  });

  if (!womentrouser[0]) return null;

  const [womentrouserfirstProduct] = womentrouser;

  const womenshirt = await getCollectionProducts({
    collection: 'all-womens-shirt'
  });

  if (!womenshirt[0]) return null;

  const [womenshirtfirstProduct] = womenshirt;

  const mensshirt = await getCollectionProducts({
    collection: 'All-mens-shirt'
  });

  if (!mensshirt[0]) return null;

  const [mensshirtfirstProduct] = mensshirt;

  const accessories = await getCollectionProducts({
    collection: 'all-accessories-shop'
  });

  if (!accessories[0]) return null;

  const [accessoriesfirstProduct] = accessories;

  // All: Children-Cloths
  const children = await getCollectionProducts({
    collection: 'children-pant'
  });

  if (!children[0]) return null;

  const [childrenfirstProduct] = children;
  // children-tshirt

  const childrentshirt = await getCollectionProducts({
    collection: 'children-tshirt'
  });

  if (!childrentshirt[0]) return null;

  const [childrentshirtfirstProduct] = childrentshirt;

  //  Children Joger

  const childrenjoger = await getCollectionProducts({
    collection: 'children-joger'
  });

  if (!childrenjoger[0]) return null;

  const [childrenjogerfirstProduct] = childrenjoger;
  return (
    <section>
      <Category
        childrenjogerfirstProduct={childrenjogerfirstProduct}
        childrentshirtfirstProduct={childrentshirtfirstProduct}
        womenshirtfirstProduct={womenshirtfirstProduct}
        womentrouserfirstProduct={womentrouserfirstProduct}
        childrenfirstProduct={childrenfirstProduct}
        accessoriesfirstProduct={accessoriesfirstProduct}
        mensshirtfirstProduct={mensshirtfirstProduct}
        priority={true}
        size={'full'}
      />
    </section>
  );
}
