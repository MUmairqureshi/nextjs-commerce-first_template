import Wrapper from 'components/Wrapper';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

export default async function Blog() {
  // const featureArticles = articles.filter((article) => article.category === 'feature');
  // const latestArticles = articles.filter((article) => article.category === 'latest-articles');
  const product = await getCollectionProducts({
    collection: 'community_blog'
  });
  if (product.length <= 0) return null;
  // const menu = [
  //   {
  //     title: 'EVERYTHING',
  //     path: '../components/blog'
  //   },
  //   {
  //     title: 'MEN',
  //     path: '../../category/men'
  //   },
  //   {
  //     title: 'WOMEN',
  //     path: '/WOMEN'
  //   }
  // ];
  return (
    <Wrapper>
      <section className="">
        {/* Top Line */}

        {/* <div className="flex flex-col items-start justify-between gap-y-3 py-2 lg:flex-row lg:items-center lg:px-20 lg:py-12">
          <div className="mt-16 text-2xl font-bold md:text-4xl lg:mt-0">BLOGS</div>
          <div>
            {menu.length ? (
              <ul className="flex items-center gap-3 text-sm md:gap-6">
                {menu.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="items-center text-sm font-semibold text-black"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="w-1/5">
            Search
          </div>
        </div> */}

        {/* Hero */}

        {/* <div className="mt-4 flex flex-col gap-x-10 gap-y-10 lg:flex-row"> */}

        {/* Left Div */}

        {/* <div className="flex-1">
            <div className="py-2">
              {featureArticles.map((product: any) => (
                <ArticleCard key={product._id} item={product} />
              ))}
            </div>
          </div> */}

        {/* Right Div */}

        {/* <div className="flex-1">
            <div className="border-b-4 border-black pb-2 font-serif text-4xl uppercase">
              Top Articles
            </div>
            <div>
              <TopArticleCard />
            </div>
          </div> */}

        {/* </div> */}

        {/* Article list */}

        {/* <div>
          <div className="mt-16 border-b-4 border-black pb-2 font-serif text-4xl uppercase lg:mt-9">
            Latest Article
          </div>
          <div className="md:grid-row mt-4 grid grid-cols-1 gap-x-4 gap-y-4 py-2 sm:grid-cols-1 lg:grid-cols-3 lg:gap-x-4 2xl:gap-x-44">
            {latestArticles.map((product: any) => (
              <ArticleItem key={product._id} item={product} />
            ))}
          </div>
          <div className="mt-12 flex gap-x-2 py-4 lg:mt-4 lg:py-10">
            <Button className="h-2 border border-black bg-black px-4 text-white hover:bg-black hover:text-white">
              1
            </Button>
            <Button className="h-2 border border-black bg-white px-4 text-black hover:bg-black hover:text-white">
              2
            </Button>
            <Button className="h-2 border border-black bg-white px-2 text-black hover:bg-black hover:text-white">
              <div>
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </Button>
          </div>
        </div>
         */}
      </section>
      <div className="w-full">
        <div className="item-center mx-auto h-full  w-full max-w-screen-2xl p-6  px-6">
          <div className=" max-h-88rem p-4 text-white ">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="bg-gray-100 p-6 font-serif  md:w-1/2">
                <Image
                  src={product[0]?.featuredImage.url || ''}
                  alt={product[0]?.featuredImage.altText || ''}
                  width={product[0]?.featuredImage.width}
                  height={product[0]?.featuredImage.height}
                  className="h-auto w-full"
                />
                <h2 className="mt-6 text-2xl font-semibold text-[#003445]">{product[0]?.title}</h2>
                <p className="mt-2 text-base text-gray-600">{product[0]?.description}</p>{' '}
                <button className="marker:  mt-2  rounded bg-white px-8 py-3 font-serif text-black transition-colors">
                  READ MORE
                </button>
              </div>

              <div className="bg-gray-100 p-6 font-serif md:w-1/2">
                <Image
                  src={product[1]?.featuredImage.url || ''}
                  alt={product[1]?.featuredImage.altText || ''}
                  width={product[0]?.featuredImage.width}
                  height={product[0]?.featuredImage.height}
                  className="h-auto w-full"
                />
                <h2 className="mt-6 text-2xl font-semibold text-[#003445]">{product[1]?.title}</h2>
                <p className="mt-2 text-base text-gray-600">{product[1]?.description}</p>
                <button className="marker:  mt-2  rounded bg-white px-8 py-3 font-serif text-black transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
