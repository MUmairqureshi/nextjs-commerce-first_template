'use client';
// Import necessary modules and components
import { Articles, articles } from 'components/product/article';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the TopArticleCard component
const TopArticleCard: React.FC<{ product: Articles }> = ({ product }) => {
  return (
    <div className="mt-10 flex flex-col gap-x-4 gap-y-4 md:flex-row lg:mt-8 lg:max-w-[430px] xl:max-w-[520px]">
      {/* Product Image (on the left) */}
      <div className="mx-auto h-[290px] w-[270px] md:h-[180px] md:w-[1000px] lg:mx-0 lg:h-[100px] lg:w-[900px] xl:h-[160px] xl:w-[990px]">
        <Image
          height={500}
          width={400}
          className="h-full w-full object-cover object-top"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      {/* Product Details (on the right) */}
      <div className="gap-y-1">
        <h2 className="font-serif text-2xl">{product.title}</h2>
        <h2 className=" line-clamp-3 font-serif text-[#888]">{product.description}</h2>
        <div className="flex justify-between">
          <Link href={'/'} className="font-bold underline">
            Read More
          </Link>

          <span className="font-thin text-[#888]">{product.date}</span>
        </div>
        {/* <div className="flex space-x-2">
          {product.category === "top-articles" && (
            <div className="text-gray-500 line-through">{product.category}</div>
          )}
        </div> */}
      </div>
    </div>
  );
};

// Define the main App component
const App: React.FC = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {articles
        .filter((product) => product.category === 'top-articles')
        .map((product) => (
          <TopArticleCard key={product._id} product={product} />
        ))}
    </motion.div>
  );
};

export default App;
