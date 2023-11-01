// 'use client';
import { getCollectionProducts } from 'lib/shopify';
import StyleCard from '../Cards/StyleCard';
import { Product } from 'lib/shopify/types';

import { type } from 'os';

function Featured({ homepageItems }: { homepageItems: Product[] }) {
  return (
    <div className="flex max-w-full flex-col items-center justify-center gap-20 bg-background py-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-wider lg:text-4xl">
          Featured Products
        </h1>
        <div className="h-[2px] w-32 bg-primary" />
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 px-2 lg:gap-y-16 ">
        {homepageItems.map((item) => {
          return (
            <StyleCard
              image={item.featuredImage.url}
              title={item.title}
              url={item.handle}
              price={item.priceRange.maxVariantPrice.amount}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function FeaturedProduct() {
  const homepageItems = await getCollectionProducts({
    collection: 'all-Feature-Product'
  });

  return (
    <section>
      <Featured homepageItems={homepageItems} />
    </section>
  );
}
