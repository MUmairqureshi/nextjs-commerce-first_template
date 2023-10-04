'use client';
import { motion } from 'framer-motion';
import { ArrowLeftSquare, ArrowRight, ArrowRightSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { products } from '../product/products';

export default function MovingProducts({
  childrenjogerfirstProduct,
  childrentshirtfirstProduct,
  childrenfirstProduct,
  accessoriesfirstProduct,
  mensshirtfirstProduct,
  womenshirtfirstProduct,
  womentrouserfirstProduct
}: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Number of items to show at a time

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + products.length) % products.length);
  };

  // Function to move products to the right
  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % products.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % products.length);
    }, 3000); // Change products every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, itemsToShow]);

  const displayedItems = products.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="flex items-center justify-between">
      <ArrowLeftSquare strokeWidth={0.8} size={40} onClick={moveLeft} className="hidden md:block" />
      <div className="flex w-full flex-col items-center justify-center gap-y-6 md:grid md:grid-cols-[repeat(3,auto)] md:gap-x-3 lg:gap-x-10 xl:gap-x-7">
        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={womentrouserfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {womentrouserfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{womentrouserfirstProduct.type}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={womenshirtfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {womenshirtfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{womenshirtfirstProduct.type}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={mensshirtfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {mensshirtfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{mensshirtfirstProduct.type}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={accessoriesfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {accessoriesfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{accessoriesfirstProduct.type}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={childrenfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {childrenfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{childrenfirstProduct.type}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>

        {/* childrentshirtfirstProduct */}

        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={childrentshirtfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {childrentshirtfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">
                  {childrentshirtfirstProduct.type}
                </h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>

        <Link href="/">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, y: '10vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto"
            viewport={{ once: true }}
          >
            <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
              <Image
                src={childrenjogerfirstProduct.featuredImage.url}
                alt="Product"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="lg:space-y-1">
              <h2 className="text-md mt-3 font-semibold md:text-lg">
                {childrenjogerfirstProduct.title}
              </h2>
              <div className="flex justify-between">
                <h5 className="text-xs text-[#888] md:text-sm">{childrenjogerfirstProduct.type}</h5>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
      <ArrowRightSquare
        strokeWidth={0.8}
        size={40}
        onClick={moveRight}
        className="hidden md:block"
      />
    </div>
  );
}
