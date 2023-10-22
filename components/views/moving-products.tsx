'use client';
import { ArrowLeftSquare, ArrowRightSquare } from 'lucide-react';
import { useState } from 'react';
import CategoryCard from './category-card';

export default function MovingProducts({
  childrenjogerfirstProduct,
  childrentshirtfirstProduct,
  childrenfirstProduct,
  accessoriesfirstProduct,
  mensshirtfirstProduct,
  womenshirtfirstProduct,
  womentrouserfirstProduct
}: any) {
  const products = [
    womentrouserfirstProduct,
    womenshirtfirstProduct,
    mensshirtfirstProduct,
    accessoriesfirstProduct,
    childrenfirstProduct,
    childrentshirtfirstProduct,
    childrenjogerfirstProduct
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Function to move to the previous set of products
  const moveLeft = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Function to move to the next set of products
  const moveRight = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const product = products.slice(startIndex, startIndex + 3);

  return (
    <div className="flex items-center justify-between">
      <ArrowLeftSquare strokeWidth={0.8} size={40} onClick={moveLeft} />
      <div className="mx-auto flex  w-full items-center  justify-center gap-y-6 md:gap-x-3 lg:gap-x-10 xl:gap-x-7">
        <div className="flex justify-center gap-y-6 md:gap-x-3 lg:grid lg:grid-cols-[repeat(3,auto)] lg:gap-x-10 xl:gap-x-24 ">
          {product.map((item, index) => (
            <CategoryCard item={item} index={index} />
          ))}
        </div>

        {/* <Link href="/">

        {products.slice(startIndex, startIndex + 3).map((currentProduct, index) => (
          <CategoryCard item={currentProduct} index={index}/>
          // <motion.div
          // key={index}
          //   whileInView={{ opacity: 1 }}
          //   initial={{ opacity: 0, y: '10vh' }}
          //   animate={{ y: 0 }}
          //   transition={{ duration: 0.5 }}
          //   className="relative mx-auto bg-blue-600"
          //   viewport={{ once: true }}
          // >
          //   <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px] xl:h-[310px] xl:w-[280px]">
          //     <Image
          //       src={currentProduct.featuredImage.url}
          //       alt="Product"
          //       height={500}
          //       width={400}
          //       className="h-full w-full object-cover object-top"
          //     />
          //   </div>
          //   <div className="lg:space-y-1">
          //     <h2 className="text-md mt-3 font-semibold md:text-lg">
          //       {currentProduct.title}
          //     </h2>
          //     <div className="flex justify-between">
          //       <h5 className="text-xs text-[#888] md:text-sm">{currentProduct.type}</h5>
          //       <ArrowRight />
          //     </div>
          //   </div>
          // </motion.div>
          ))}
        </Link> */}

        {/*<Link href="/">
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
        </Link> */}

        {/* childrentshirtfirstProduct */}

        {/* <Link href="/">
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
        </Link> */}
      </div>
      <ArrowRightSquare strokeWidth={0.8} size={40} onClick={moveRight} />
    </div>
  );
}
