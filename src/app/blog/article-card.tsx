'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Article = {
  _id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  //   colors?: ColorOption[]; // Make colors optional
};

const ArticleCard: FC<{ item: Article }> = ({ item }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
      viewport={{ once: true }}
    >
      <div className="mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[720px] lg:mx-0 lg:h-[280px] lg:w-[450px] xl:h-[560px] xl:w-[620px]">
        <Image
          src={item.imageUrl}
          alt={item.title}
          height={500}
          width={400}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="lg:gap-y-1">
        <h5 className="mt-8 text-xl uppercase text-[#888]">{item.category}</h5>
        <h2 className="mt-3 text-4xl font-thin">{item.title}</h2>
        <p className="mt-9 line-clamp-3 text-[#888]">{item.description}</p>
        <div className="py-3">
          <Link href={'/'} className="font-bold underline">
            Read More
          </Link>
        </div>
        <span className="font-thin text-[#888]">{item.date}</span>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
