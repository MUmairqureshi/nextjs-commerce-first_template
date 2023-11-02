/* eslint-disable react/jsx-key */
import { defaultSort, sorting } from 'lib/constants';
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import BestSellerProductCard from '../../best-seller-product-card';
import MenProducts from '../../men-products';
import CategoryComponent from './category-component';

export default async function Hero({
  params,
  searchParams
}: {
  params: { category: string; handle: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  // console.log("params",params.handle)
  let tshirt, joggers, pants;
  if (params.handle == 'men_category') {
    tshirt = await getCollection(`mens-shirt`);
    joggers = await getCollection(`mens-jogger`);
    pants = await getCollection(`mens-pant`);
  } else if (params.handle == 'women_category') {
    tshirt = await getCollection(`womens-tshirt`);
    joggers = await getCollection(`womens-footwear`);
    pants = await getCollection(`womens-trouser`);
  } else if (params.handle == 'children_category') {
    tshirt = await getCollection(`children-tshirt`);
    joggers = await getCollection(`childrens-joger`);
    pants = await getCollection(`childrens-pant`);
  }
  const menus = [tshirt, joggers, pants];

  const latestProduct = await getCollectionProducts({
    sortKey,
    reverse,
    collection: `${params.category}`
  });

  const collection = await getCollection(`${params.category}`);
  // console.log("collection",params.category)
  const main_collection = await getCollection(`${params.handle}`);

  return (
    <section>
      <CategoryPage
        item={latestProduct}
        collection={collection}
        main_collection={main_collection}
        menu={menus}
        params={params}
      />
    </section>
  );
}

async function CategoryPage({
  collection,
  item,
  menu,
  params,
  main_collection
}: {
  item: Product[];
  collection: any;
  menu: any;
  params: { handle: string; category: string };
  main_collection: any;
}) {
  return (
    <section className="flex flex-col bg-slate-100">
      <div className="mx-1 my-16 flex flex-col-reverse gap-x-4 gap-y-8 px-1 md:mx-2 md:px-2 lg:flex-row 2xl:mx-80 2xl:px-80">
        <div className="basis-1/4">
          {/* <MenProductSideBar /> */}

          <section className="lg:mx-2">
            <CategoryComponent menu={menu} params={params} />
            {/* <div className="py-8">
              <h1 className="mb-8 text-xl">Categories</h1>
              <ul className="mt-5 items-center justify-center space-y-4 font-light">
                {menu.map((item:any, idx:number) =>{
                  console.log("item",item)
                return (
                  <div className="border-b-2 font-mono">
                    <li key={idx} className="mb-4 flex justify-between text-black">
                      <div className={`font-serif hover:text-indigo-600`}>
                        <Link href={`/collection/${params.handle}/${params.category}`}>{item.title}</Link>
                      </div>
                    </li>
                  </div>
                )})}
              </ul>
            </div> */}
            <div className="py-6">
              <h1 className="mb-4 text-xl">Our Best Sellers</h1>
              <div>
                <BestSellerProductCard />
              </div>
            </div>
          </section>
        </div>
        <div className="basis-3/4 bg-white md:mt-4 lg:mt-0">
          {/* <MenProducts /> */}

          <section className="p-4 md:mt-4 lg:mt-0 lg:px-6 lg:py-16 xl:px-16">
            <h2 className="text-sm capitalize text-gray-500 lg:text-base">
              home / {main_collection.title} / {collection.title}
            </h2>
            <h1 className="py-6 text-3xl capitalize text-black md:text-5xl lg:text-6xl">
              {collection.title}
            </h1>
            <p className="mt-5 text-sm text-gray-900 lg:mt-12 lg:text-base">
              {collection.description}
            </p>
            {item.length > 0 ? <MenProducts items={item} /> : null}
          </section>
        </div>
      </div>
    </section>
  );
}
