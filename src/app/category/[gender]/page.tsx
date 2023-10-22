import { products } from 'components/product/products';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from 'src/components/ui/button';
import BestSellerProductCard from '../best-seller-product-card';
import DefaultSortingDropdown from '../default-sorting-dropdown';
import Filter from '../filter';
import ProductCart from '../product-cart';

export default async function CategoryPage({ params }: { params: { gender: string } }) {
  const menus = [
    { title: 'Accessories', path: '/your-path', quantity: '7' },
    { title: 'Men', path: '/your-path', quantity: '14' },
    { title: 'Women', path: '/your-path', quantity: '17' }
  ];

  return (
    <section className="flex flex-col bg-slate-100">
      <div className="mx-1 mt-16 flex flex-col-reverse gap-y-8 px-1 md:mx-3 md:px-3 lg:flex-row xl:mx-8 xl:px-8 2xl:mx-80 2xl:px-80">
        <div className="basis-1/4">
          {/* <MenProductSideBar /> */}

          <section className="lg:mx-4">
            {/* <SearchBar /> */}
            Search Bar
            <div className="py-16">
              <Filter products={products} />
            </div>
            <div className="py-8">
              <h1 className="text-lg">Categories</h1>
              <ul className="mt-5 items-center justify-center space-y-4 font-light">
                {menus.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-black">
                    <div className="hover:text-indigo-600">
                      <Link href={item.path}>{item.title}</Link>
                    </div>
                    <div>({item.quantity})</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-6">
              <h1 className="mb-4 text-lg">Our Best Sellers</h1>
              <div>
                <BestSellerProductCard />
              </div>
            </div>
          </section>
        </div>
        <div className="basis-3/4 bg-white ">
          {/* <MenProducts /> */}

          <section className="p-5 lg:px-8 lg:py-16 xl:px-28">
            <h2 className="text-sm capitalize text-gray-500 lg:text-base">
              home / {params.gender}
            </h2>
            <h1 className="py-6 text-3xl capitalize text-black md:text-5xl lg:text-6xl">
              {params.gender}
            </h1>
            <p className="mt-5 text-sm text-gray-900 lg:mt-12 lg:text-base">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
              dapibus condimentum sit amet a augue. Sed non neque elit sed ut.
            </p>
            <div className="flex flex-col justify-between gap-y-3 py-4 text-sm md:flex-row md:items-center lg:text-base">
              <div>Showing 1 – 12 of 14 results</div>
              <DefaultSortingDropdown />
              {/* <div>
                  <Select>
                    <SelectTrigger className="w-[200px] lg:w-[220px]">
                      <SelectValue placeholder="Default sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default sorting</SelectItem>
                      <SelectItem value="popularity">
                        Sort by popularity
                      </SelectItem>
                      <SelectItem value="average_rating">
                        Sort by average rating
                      </SelectItem>
                      <SelectItem value="latest">Sort by latest</SelectItem>
                      <SelectItem value="low_to_high">
                        Sort by price: low to high
                      </SelectItem>
                      <SelectItem value="high_to_low">
                        Sort by price: high to low
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 py-2 md:grid-cols-3">
              {products.map((product: any) => (
                <ProductCart key={product._id} item={product} />
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
          </section>
        </div>
      </div>
    </section>
  );
}
