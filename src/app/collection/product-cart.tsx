'use client';
import { motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

const ProductCart: FC<{ item: Product }> = ({ item }) => {
  // console.log("item",item)
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  const handleColorClick = (index: string) => {
    if (index === 'Cyan') {
      setSelectedColorIndex(0);
    } else if (index === 'Green') {
      setSelectedColorIndex(2);
    } else if (index === 'Blue') {
      setSelectedColorIndex(1);
    } else if (index === 'Red') {
      setSelectedColorIndex(3);
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto my-2 max-w-[130px] md:max-w-[210px] xl:max-w-[250px]"
      viewport={{ once: true }}
    >
      <Link href={`/product/${item.handle}`} key={item.id}>
        <div className="h-[140px] w-[130px] md:h-[230px] md:w-[210px] xl:h-[260px] xl:w-[250px]">
          <Image
            src={item.images[selectedColorIndex]?.url || ''}
            alt={item.images[selectedColorIndex]?.altText || ''}
            height={item.images[selectedColorIndex]?.height}
            width={item.images[selectedColorIndex]?.width}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </Link>
      <div className="lg:space-y-1">
        <h2 className="text-md mt-3 font-semibold md:text-lg">{item.title}</h2>
        <h1 className="text-sm font-medium sm:text-base">
          <div className="flex gap-x-2">${item?.variants[selectedColorIndex]?.price.amount}</div>
        </h1>
        <div className="flex gap-x-4">
          {item.variants &&
            item.variants.map((variant) => (
              <button
                key={variant.id}
                className={`rounded-full fill-${variant.title.toLowerCase()}-600 h-6 w-6`}
                onClick={() => handleColorClick(variant.title)}
              />
            ))}
        </div>
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
