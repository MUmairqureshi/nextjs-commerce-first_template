import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

const ChooseUs = async ({ bgColor }: { bgColor: string }) => {
  const Data = await getCollectionProducts({
    collection: 'choose-us'
  });
  return (
    <div className={`w-full bg-${bgColor} flex justify-center px-10 py-24 lg:py-32`}>
      <div className="flex  w-full max-w-screen-xl flex-col flex-wrap items-center justify-center gap-x-10 gap-y-7 md:flex-row xl:justify-between">
        {Data.map((item, ind) => {
          return (
            <div key={ind} className="flex w-64 flex-col items-center justify-center gap-2">
              <Image
                src={item.featuredImage.url}
                alt={item.featuredImage.altText}
                width={item.featuredImage.width}
                height={item.featuredImage.height}
              />
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-center text-sm text-[#13151a]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
