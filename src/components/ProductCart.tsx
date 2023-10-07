'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
type ColorOption = {
  color: string;
  overlayColor: string;
  imageSrc: string; // Add image source for each color
  priceChange: number; // Add price change for each color
};

type Product = {
  id: number;
  title: string;
  category: string;
  priceType: 'fixed' | 'range' | 'discounted';
  price: number; // For products with a fixed actual price
  priceRange?: [number, number]; // For products with a price range
  discountedPrice?: number; // For products with a discounted price
  imageUrl: StaticImageData;
  colors?: ColorOption[]; // Make colors optional
};

const ProductCart: React.FC<{ item: Product }> = ({ item }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const selectedColorOption =
    item.colors && selectedColorIndex !== null ? item.colors[selectedColorIndex] : null;

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  return (
    <div className="relative">
      <div className="h-[190px] w-[170px] lg:h-[280px] lg:w-[260px] xl:h-[270px] xl:w-[250px]">
        <Image
          src={selectedColorOption ? selectedColorOption.imageSrc : item.imageUrl}
          alt="Product"
          height={500}
          width={400}
          className="h-full w-full object-cover object-top"
        />
        {selectedColorOption && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: selectedColorOption.overlayColor,
              opacity: 0.2,
              clipPath: 'inset(0)'
            }}
          ></div>
        )}
      </div>

      <div className="lg:space-y-1">
        <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
        <h5 className="text-sm text-[#888]">{item.category}</h5>

        {item.priceType === 'discounted' && (
          <div className=" text-gray-500 line-through">${item.price?.toFixed(2)}</div>
        )}
        {item.priceType === 'fixed' && (
          <div className=" text-black">
            $
            {selectedColorOption
              ? (item.price + selectedColorOption.priceChange).toFixed(2)
              : item.price.toFixed(2)}
          </div>
        )}
        {item.priceType === 'range' && (
          <div className=" text-black">
            ${item.priceRange?.[0].toFixed(2)} - ${item.priceRange?.[1].toFixed(2)}
          </div>
        )}
        {item.priceType === 'discounted' && (
          <div className=" text-black">${item.discountedPrice?.toFixed(2)}</div>
        )}
        {item.colors && ( // Check if colors are defined for the product
          <div className="flex space-x-2">
            {item.colors.map((colorOption, index) => (
              <button
                key={index}
                onClick={() => handleColorClick(index)}
                className={`h-6 w-6 rounded-full fill-current focus:outline-none ${
                  selectedColorIndex === index ? 'ring-1 ring-gray-500 ring-offset-1' : ''
                }`}
                style={{
                  backgroundColor: colorOption.color,
                  position: 'relative',
                  zIndex: 1
                }}
              ></button>
            ))}
          </div>
        )}
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={16} strokeWidth={1} className="h-5 w-5" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
