import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const CategoryCard: FC<{ item: any; index: any }> = ({ item, index }) => {
  return (
    <Link href={`/product/${item.handle}`}>
      <motion.div
        key={index}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-[225px] md:max-w-[185px] lg:max-w-[240px]"
        viewport={{ once: true }}
      >
        <div className="h-[245px] w-[225px] md:h-[210px] md:w-[185px] lg:h-[260px] lg:w-[240px]">
          <Image
            src={item.featuredImage.url}
            alt="Product"
            height={500}
            width={400}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="lg:space-y-1">
          <h2 className="text-md mt-3 font-semibold md:text-lg">{item.title}</h2>
          <div className="flex justify-between">
            <h5 className="text-xs text-[#888] md:text-sm">{item.type}</h5>
            <ArrowRight />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
