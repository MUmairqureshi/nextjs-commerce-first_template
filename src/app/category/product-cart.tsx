'use client';
import { Product } from 'components/product/products';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';

const ProductCart: FC<{ item: Product }> = ({ item }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const selectedColorOption =
    item.colors && selectedColorIndex !== null ? item.colors[selectedColorIndex] : null;

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-[125px] md:max-w-sm"
      viewport={{ once: true }}
    >
      <div className="h-[145px] w-[125px] md:h-[230px] md:w-[210px] lg:h-[200px] lg:w-[180px] xl:h-[260px] xl:w-[240px]">
        <Image
          src={selectedColorOption ? selectedColorOption.imageSrc : item.imageUrl}
          alt="Product"
          height={500}
          width={400}
          className="h-full w-full object-cover object-top"
        />
        {selectedColorOption && <div className="absolute inset-0"></div>}
      </div>
      <div className="lg:space-y-1">
        <h2 className="text-md mt-3 font-semibold md:text-lg">{item.title}</h2>
        <h5 className="text-xs text-[#888] md:text-sm">{item.category}</h5>
        <h1 className="text-sm font-medium sm:text-base">
          $
          {selectedColorOption
            ? (item.price + selectedColorOption.priceChange).toFixed(2)
            : item.price.toFixed(2)}
        </h1>
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
    </motion.div>
  );
};

export default ProductCart;
