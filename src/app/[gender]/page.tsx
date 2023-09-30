import React from 'react';
import Link from 'next/link';
import BestSellerProductCard from '@/components/BestSellerProductCard';
import SearchBar from '@/components/SearchBar';
import ProductCart from '@/components/ProductCart';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';
import { ProductProvider } from '@/components/ProductContext';
import Filter from '@/components/Filter';

const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};
export default async function CategoryPage({ params }: { params: any }) {
  const result = getProductsByCategory(params.gender);
  const menus = [
    { title: 'Accessories', path: '/category/Accessories', quantity: '7' },
    { title: 'Men', path: '/category/Men', quantity: '14' },
    { title: 'Women', path: '/category/Women', quantity: '17' }
  ];

  return (
    <ProductProvider>
      <section className="flex flex-col bg-slate-100">
        <div className="mt-16 flex flex-col-reverse gap-x-3 gap-y-8 lg:flex-row">
          <div className="basis-1/4">
            {/* <MenProductSideBar /> */}

            <section className="px-2 lg:px-8">
              <SearchBar />
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
          <div className="basis-3/4 bg-white">
            {/* <MenProducts params={params} /> */}

            <section className="p-5 lg:px-28 lg:py-24">
              <h2 className="text-sm capitalize text-gray-500 lg:text-base">
                home / {params.gender}
              </h2>
              <h1 className="py-6 text-3xl capitalize text-black lg:text-6xl">{params.gender}</h1>
              <p className="mt-5 text-sm text-gray-900 lg:mt-12 lg:text-base">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.
              </p>
              <div className="flex items-center justify-between py-4 text-sm lg:text-base">
                <div>Showing 1 – 12 of 14 results</div>
                <Select>
                  <SelectTrigger className="w-[200px] lg:w-[220px]">
                    <SelectValue placeholder="Default sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default sorting</SelectItem>
                    <SelectItem value="popularity">Sort by popularity</SelectItem>
                    <SelectItem value="average_rating">Sort by average rating</SelectItem>
                    <SelectItem value="latest">Sort by latest</SelectItem>
                    <SelectItem value="low_to_high">Sort by price: low to high</SelectItem>
                    <SelectItem value="high_to_low">Sort by price: high to low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {result.length > 0 ? (
                  result.map((product: any) => <ProductCart key={product._id} item={product} />)
                ) : (
                  <p>No Products Found</p>
                )}
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
    </ProductProvider>
  );
}
