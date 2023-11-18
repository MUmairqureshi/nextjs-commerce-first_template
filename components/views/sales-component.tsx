import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

function Salespage({
  childrenfirstProduct,
  womensshopfirstProduct,
  mensshopfirstProduct,
  seasonsalefirstProduct,
  onallproductfirstProduct
}: any) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 py-20">
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-6 lg:gap-x-4 xl:gap-x-6">
        <div className="relative flex-1">
          <div className="relative mx-auto h-[290px] w-[280px] md:h-[280px] md:w-[320px] lg:mx-0 lg:h-[280px] lg:w-[455px] xl:h-[470px] xl:w-[580px] 2xl:h-[280px] 2xl:w-[490px]">
            {/* Image */}
            <Image
              src={seasonsalefirstProduct.featuredImage.url}
              alt="50% off"
              height={500}
              width={400}
              className="h-full w-full object-cover object-top"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

            {/* Text */}
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
              <h1>50% off</h1>
              <p>End of season sale</p>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[320px] lg:mx-0 lg:h-[280px] lg:w-[455px] xl:h-[470px] xl:w-[580px] 2xl:h-[280px] 2xl:w-[490px]">
            <Image
              src={mensshopfirstProduct.featuredImage.url}
              alt="50% off"
              height={500}
              width={400}
              className="h-full w-full object-cover object-top"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

            {/* Text */}
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
              <h1>25% off</h1>
              <p>On all products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-5 lg:gap-x-3 xl:gap-x-5 2xl:gap-x-7">
        <div className="relative">
          <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[210px] lg:mx-0 lg:h-[280px] lg:w-[300px] xl:h-[470px] xl:w-[380px] 2xl:h-[280px] 2xl:w-[320px]">
            <Image
              src={onallproductfirstProduct.featuredImage.url}
              alt="50% off"
              height={500}
              width={400}
              className="h-full w-full object-cover object-top "
            />
            {/* Dull black overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
            {/* Text */}
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
              <h1>Shop&apos;s Men</h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[210px] lg:mx-0 lg:h-[280px] lg:w-[303px] xl:h-[470px] xl:w-[383px] 2xl:h-[280px] 2xl:w-[317px]">
            <Image
              src={childrenfirstProduct.featuredImage.url}
              alt="50% off"
              height={500}
              width={400}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
              <h1>Shop&apos;s Women</h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[210px] lg:mx-0 lg:h-[280px] lg:w-[300px] xl:h-[470px] xl:w-[380px] 2xl:h-[280px] 2xl:w-[320px]">
            <Image
              src={childrenfirstProduct.featuredImage.url}
              alt="50% off"
              height={500}
              width={400}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
              <h1>Shop&apos;s Accessories</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function Sales() {
  // Collections that start with `hidden-*` are hidden from the search page.

  const onallproduct = await getCollectionProducts({
    collection: 'All-on-all-product'
  });

  if (!onallproduct[0]) return null;

  const [onallproductfirstProduct] = onallproduct;

  const seasonsale = await getCollectionProducts({
    collection: 'All-end-Off-season-sale'
  });

  if (!seasonsale[0]) return null;

  const [seasonsalefirstProduct] = seasonsale;

  const mensshop = await getCollectionProducts({
    collection: 'All-mens-shop'
  });

  if (!mensshop[0]) return null;

  const [mensshopfirstProduct] = mensshop;

  const womensshop = await getCollectionProducts({
    collection: 'all-women-shop'
  });

  if (!womensshop[0]) return null;

  const [womensshopfirstProduct] = womensshop;

  // All: Children-Cloths
  const children = await getCollectionProducts({
    collection: 'all-children-cloths'
  });

  if (!children[0]) return null;

  const [childrenfirstProduct] = children;
  return (
    <section>
      <Salespage
        childrenfirstProduct={childrenfirstProduct}
        womensshopfirstProduct={womensshopfirstProduct}
        mensshopfirstProduct={mensshopfirstProduct}
        seasonsalefirstProduct={seasonsalefirstProduct}
        onallproductfirstProduct={onallproductfirstProduct}
        priority={true}
        size={'full'}
      />
    </section>
  );
}
