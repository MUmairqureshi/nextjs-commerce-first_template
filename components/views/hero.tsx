import { getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import HeroText from './hero-text';

async function HeroPage({ item, priority }: { item: Product; priority?: boolean }) {
  return (
    <div className="relative -top-32 h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${item.featuredImage.url})` }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-40">
        <div className="flex h-full items-center">
          <div className="text-white">
            <HeroText /> {/* Make sure HeroText renders your desired content */}
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
