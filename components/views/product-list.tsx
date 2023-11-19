'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'src/components/ui/button';

export default function ProductList({
  men,
  women,
  children
}: {
  men: any;
  women: any;
  children: any;
}) {
  return (
    <section className="py-10 lg:py-28">
      <div className="flex flex-col items-center justify-center gap-y-6 md:grid md:grid-cols-[repeat(3,auto)] md:gap-x-5 xl:gap-x-10 2xl:gap-x-10 ">
        {/* {displayedItems.map((item) => ( */}
        <motion.div
          className="relative"
          transition={{ duration: 0.7 }}
          initial={{ x: -90, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="relative h-[290px] w-[280px] md:h-[570px] md:w-[210px] lg:h-[480px] lg:w-[295px] xl:h-[460px] xl:w-[370px] 2xl:h-[460px] 2xl:w-[310px]">
            {/* Dull black overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
            {/* Product Image */}
            <Image
              src={women.image.url}
              alt={women.image?.altText}
              height={women.image.height}
              width={women.image.width}
              className="z-0 h-full w-full object-cover object-top md:object-right-top"
            />
          </div>
          <div className="absolute inset-0 z-20 m-5 flex flex-col items-start justify-end gap-y-4 text-lg font-semibold text-white lg:m-6 lg:space-y-1 xl:m-10">
            <h2 className="mt-3 text-2xl">{women.title}</h2>
            <p className="text-sm font-[350]">{women.description}</p>
            <Link href={women.path}>
              <Button className="w-full lg:w-40 ">SHOP NOW</Button>
            </Link>
            {/* <Link href="#" className="mt-2 bg-[#212121] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000] transition-colors duration-300">
                    Buy Now
                </Link> */}
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ y: 50, opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative h-[290px] w-[280px] md:h-[570px] md:w-[210px] lg:h-[480px] lg:w-[295px] xl:h-[460px] xl:w-[370px] 2xl:h-[460px] 2xl:w-[310px]">
            {/* Dull black overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
            {/* Product Image */}
            <Image
              src={men.image.url}
              alt={men.image?.altText}
              height={men.image.height}
              width={men.image.width}
              className="z-0 h-full w-full object-cover object-top md:object-right-top"
            />
          </div>
          <div className="absolute inset-0 z-20 m-5 flex flex-col items-start justify-end gap-y-4 text-lg font-semibold text-white lg:m-6 lg:space-y-1 xl:m-10">
            <h2 className="mt-3 text-2xl">{men.title}</h2>
            <p className="text-sm font-[350]">{men.description}</p>
            <Link href={men.path}>
              <Button className="w-full lg:w-40 ">SHOP NOW</Button>
            </Link>
            {/* <Link href="#" className="mt-2 bg-[#212121] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000] transition-colors duration-300">
                    Buy Now
                </Link> */}
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ x: 90, opacity: 0.2 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative h-[290px] w-[280px] md:h-[570px] md:w-[210px] lg:h-[480px] lg:w-[295px] xl:h-[460px] xl:w-[370px] 2xl:h-[460px] 2xl:w-[310px]">
            {/* Dull black overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
            {/* Product Image */}
            <Image
              src={children.image.url}
              alt={children.image?.altText}
              height={children.image.height}
              width={children.image.width}
              className="z-0 h-full w-full object-cover object-top md:object-right-top"
            />
          </div>
          <div className="absolute inset-0 z-20 m-5 flex flex-col items-start justify-end gap-y-4 text-lg font-semibold text-white lg:m-6 lg:space-y-1 xl:m-10">
            <h2 className="mt-3 text-2xl">{children?.title}</h2>
            <p className="text-sm font-[350]">{children?.description}</p>
            <Link href={children.path}>
              <Button className="w-full lg:w-40 ">SHOP NOW</Button>
            </Link>
            {/* <Link href="#" className="mt-2 bg-[#212121] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000] transition-colors duration-300">
                    Buy Now
                </Link> */}
          </div>
        </motion.div>
        {/* ))} */}
      </div>
    </section>
  );
}
