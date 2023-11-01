import { getCollectionProducts } from 'lib/shopify';
import Hero from './hero';
import CardListingScetion from './listing';

export default async function Blogs() {
  const latestProduct = await getCollectionProducts({
    collection: 'blogs'
  });
  if (!latestProduct[0]) return null;

  const Blogs = await getCollectionProducts({
    collection: 'all-blogs-products'
  });
  if (!Blogs[0]) return null;

  return (
    <div className="mx-auto w-full max-w-screen-2xl ">
      <Hero
        altText={latestProduct[0]?.featuredImage.altText}
        imageSrc={latestProduct[0]?.featuredImage.url}
        height={latestProduct[0]?.featuredImage.height}
        width={latestProduct[0]?.featuredImage.width}
        title={latestProduct[0]?.title}
        description={latestProduct[0]?.description}
      />

      <section className="">
        <div className=" mx-7  items-center justify-center border-b-[1px] border-[#032733] bg-white font-bold ">
          <h1 className="h1 m-0 mb-[20px]  text-center text-base  font-bold uppercase text-[#032733]">
            MOST RECENT
          </h1>
        </div>

        <CardListingScetion Products={Blogs} />
      </section>
    </div>
  );
}
