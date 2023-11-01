'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from 'src/components/ui/button';

const ItemLook = ({ fourProduct, item, secondProduct }: any) => {
  const filledStars = 2;

  return (
    <div className="flex flex-col">
      <Link key={fourProduct.handle} href={`/product/${fourProduct.handle}`}>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: '10vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto flex gap-x-4 xl:my-7 2xl:my-2"
          viewport={{ once: true }}
        >
          <div className="h-[170px] w-[170px] md:h-[140px] md:w-[140px] lg:h-[190px] lg:w-[190px]">
            <img
              src={fourProduct.featuredImage.url}
              alt="homepageItems"
              height={500}
              width={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {fourProduct.title}
            </h2>
            <h5 className="text-xl font-bold md:text-2xl lg:mt-2 lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {/* ${product.price} */}
            </h5>
            {/* Display 5 stars (You can customize this part) */}
            <div className="my-1 flex lg:my-2 2xl:my-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  strokeWidth={0}
                  className={`h-5 w-5 ${star <= filledStars ? 'fill-yellow-500' : 'fill-gray-400'}`}
                />
              ))}
              <span className="ml-1 text-gray-600">1,002</span>
            </div>

            <Button variant={'outline'} className="h-9 border-2 border-black px-0 py-0 2xl:h-12">
              Add To Cart
            </Button>
          </div>
        </motion.div>
      </Link>
      <Link key={secondProduct.handle} href={`/product/${secondProduct.handle}`}>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: '10vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto flex gap-x-4 xl:my-7 2xl:my-2"
          viewport={{ once: true }}
        >
          <div className="h-[170px] w-[170px] md:h-[140px] md:w-[140px] lg:h-[190px] lg:w-[190px]">
            <img
              src={secondProduct.featuredImage.url}
              alt="homepageItems"
              height={500}
              width={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {secondProduct.title}
            </h2>
            <h5 className="text-xl font-bold md:text-2xl lg:mt-2 lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {/* ${product.price} */}
            </h5>
            {/* Display 5 stars (You can customize this part) */}
            <div className="my-1 flex lg:my-2 2xl:my-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  strokeWidth={0}
                  className={`h-5 w-5 ${star <= filledStars ? 'fill-yellow-500' : 'fill-gray-400'}`}
                />
              ))}
              <span className="ml-1 text-gray-600">1,002</span>
            </div>

            <Button variant={'outline'} className="h-9 border-2 border-black px-0 py-0 2xl:h-12">
              Add To Cart
            </Button>
          </div>
        </motion.div>
      </Link>
      <Link key={item.handle} href={`/product/${item.handle}`}>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: '10vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto flex gap-x-4 xl:my-7 2xl:my-2"
          viewport={{ once: true }}
        >
          <div className="h-[170px] w-[170px] md:h-[140px] md:w-[140px] lg:h-[190px] lg:w-[190px]">
            <img
              src={item.featuredImage.url}
              alt="homepageItems"
              height={500}
              width={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {item.title}
            </h2>
            <h5 className="text-xl font-bold md:text-2xl lg:mt-2 lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {/* ${product.price} */}
            </h5>
            {/* Display 5 stars (You can customize this part) */}
            <div className="my-1 flex lg:my-2 2xl:my-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  strokeWidth={0}
                  className={`h-5 w-5 ${star <= filledStars ? 'fill-yellow-500' : 'fill-gray-400'}`}
                />
              ))}
              <span className="ml-1 text-gray-600">1,002</span>
            </div>

            <Button variant={'outline'} className="h-9 border-2 border-black px-0 py-0 2xl:h-12">
              Add To Cart
            </Button>
          </div>
        </motion.div>
      </Link>
      {/* ))} */}
    </div>
  );
};

export default ItemLook;
