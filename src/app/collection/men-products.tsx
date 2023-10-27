'use client';
import { Product } from 'lib/shopify/types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from 'src/components/ui/button';
import DefaultSortingDropdown from './default-sorting-dropdown';
import ProductCart from './product-cart';

const MenProducts = ({ items }: { items: Product[] }) => {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        className={`h-2 border border-black bg-black px-4 font-thin text-white hover:bg-black hover:text-white ${
          currentPage === i ? 'border border-black' : ''
        }`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Button>
    );
  }
  return (
    <div className="basis-8/12 lg:basis-3/4 xl:basis-4/5">
      <section className="">
        <div className="flex flex-col justify-between gap-y-3 py-4 text-sm md:flex-row md:items-center lg:text-base">
          <div>Showing 1 – 12 of 14 results</div>
          <DefaultSortingDropdown />
        </div>
        <div className="grid grid-cols-2 gap-y-3 py-3 md:grid-cols-3 lg:px-3">
          {paginatedItems.map((product: any) => (
            <ProductCart key={product.id} item={product} />
          ))}
        </div>
        <div className="mt-12 flex gap-x-2 py-4 lg:mt-4 lg:py-10">
          <Button className="h-2 border border-black bg-white px-2 text-black hover:bg-black hover:text-white">
            <div>
              <div onClick={() => handlePageChange(currentPage - 1)}>
                <ArrowLeft size={20} strokeWidth={2} />
              </div>
            </div>
          </Button>
          {pageButtons}
          <Button className="h-2 border border-black bg-white px-2 text-black hover:bg-black hover:text-white">
            <div>
              <div onClick={() => handlePageChange(currentPage + 1)}>
                <ArrowRight size={20} strokeWidth={2} />
              </div>
            </div>
          </Button>
        </div>
        {/* <div className="mt-12 flex items-center justify-center gap-x-2 py-4 lg:mt-4 lg:py-10">
          <div onClick={() => handlePageChange(currentPage - 1)}>
            <ChevronLeft strokeWidth={1} />
          </div>
          {pageButtons}
          <div onClick={() => handlePageChange(currentPage + 1)}>
            <ChevronRight strokeWidth={1} />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default MenProducts;
