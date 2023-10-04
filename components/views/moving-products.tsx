'use client';
import { motion } from 'framer-motion';
import { ArrowLeftSquare, ArrowRight, ArrowRightSquare } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import t_shirt from '/components/images/blue_cotton_t_shirt.jpeg';
import trouser from '/components/images/boys_cargo_pants.jpeg';
import shoes from '/components/images/boys_high_top_athletic_shoes.jpeg';
import women from '/components/images/first.jpg';

export type Product = {
  _id: number;
  title: string;
  category: string;
  imageUrl: StaticImageData;
};

const products: Product[] = [
  {
    _id: 1,
    title: 'Trousers',
    category: 'Pants',
    imageUrl: trouser
  },
  {
    _id: 2,
    title: 'Jogger',
    category: 'Shoes',
    imageUrl: shoes
  },
  {
    _id: 3,
    title: 'Wearables',
    category: 'Accessories',
    imageUrl: women
  },
  {
    _id: 4,
    title: 'T-Shirt',
    category: 'Shirts',
    imageUrl: t_shirt
  },
  {
    _id: 5,
    title: 'Bracelet',
    category: 'Accessories',
    imageUrl: women
  }
];

export default function MovingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the previous product
  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Function to move to the next product
  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const displayedItem = products[currentIndex];
  const displayedItem2 = products[(currentIndex + 1) % products.length];
  const displayedItem3 = products[(currentIndex + 2) % products.length];

  return (
    <section className="flex items-center justify-between">
      <ArrowLeftSquare strokeWidth={0.8} size={40} onClick={moveLeft} />
      <div className="flex w-full flex-col items-center justify-evenly gap-y-6 md:flex-row md:gap-x-1 ">
        {/* {displayedItems.map((item, index) => ( */}
        {/* <Link href={`/product/${item._id}`} key={index}> */}
        {displayedItem && (
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto hidden md:block"
            viewport={{ once: true }}
          >
            <div className="h-[210px] w-[165px] lg:h-[240px] lg:w-[210px]">
              <Image
                src={displayedItem.imageUrl}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">{displayedItem.title}</h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{displayedItem.category}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        )}
        {displayedItem2 && (
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[210px] w-[170px] lg:h-[240px] lg:w-[210px]">
              <Image
                src={displayedItem2.imageUrl}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">{displayedItem2.title}</h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{displayedItem2.category}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        )}
        {displayedItem3 && (
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto hidden md:block"
            viewport={{ once: true }}
          >
            <div className="h-[210px] w-[165px] lg:h-[240px] lg:w-[210px]">
              <Image
                src={displayedItem3.imageUrl.src}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">{displayedItem3.title}</h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{displayedItem3.category}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        )}
        {/* </Link> */}
        {/* ))} */}
      </div>
      <ArrowRightSquare strokeWidth={0.8} size={40} onClick={moveRight} />
    </section>
  );
}
