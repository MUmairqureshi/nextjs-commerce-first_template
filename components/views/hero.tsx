import { getCollectionProducts } from 'lib/shopify';
import HeroText from './hero-text';
import { Product } from 'lib/shopify/types';

async function HeroPage({ item, priority }: { item: Product; priority?: boolean }) {
  return (
    <div className="relative -top-32 h-[600px] overflow-hidden  bg-cover bg-center bg-no-repeat">
      <img src={item.featuredImage.url} />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-40 bg-fixed">
        <div className="flex h-full items-center ">
          <div className="text-white">
            <HeroText />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function Hero() {
  const homepageItems = await getCollectionProducts({
    collection: 'all-hero-section'
  });

  if (!homepageItems[0]) return null;

  const [firstProduct] = homepageItems;

  return (
    <section>
      <HeroPage item={firstProduct} priority={true} />
    </section>
  );
}
