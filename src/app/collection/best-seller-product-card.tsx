/* eslint-disable react/jsx-no-undef */
import { getCollectionProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href={product.handle}>
      <div className="flex border-b-2 ">
        {/* Product Image (on the left) */}
        <div className="mb-4 mt-5 h-[80px] w-[80px] flex-shrink-0">
          <Image
            height={product.featuredImage.height}
            width={product.featuredImage.width}
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            className="h-full w-full object-cover object-top"
          />
        </div>
        {/* Product Details (on the right) */}
        <div className="ml-4 mt-4 space-y-1">
          <h2 className="text-md">{product.title}</h2>
          <div className="flex items-center">
            {/* Display 5 stars (You can customize this part) */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} strokeWidth={1} className="h-5 w-5" />
              ))}
            </div>
            {/* <span className="ml-1 text-gray-600">{product.rating}</span> */}
          </div>
          <div className="flex space-x-2">
            {product.priceRange.minVariantPrice.amount !==
            product.priceRange.maxVariantPrice.amount ? (
              <div className="text-gray-500">
                ${product.priceRange.minVariantPrice.amount} - $
                {product.priceRange.maxVariantPrice.amount}
              </div>
            ) : (
              <div className="text-gray-500">${product.priceRange.minVariantPrice.amount}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const App: React.FC = async () => {
  const product = await getCollectionProducts({ collection: 'best-seller' });
  return (
    <>
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default App;
