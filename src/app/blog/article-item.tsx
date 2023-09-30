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

const ArticleItem: FC<{ item: Article }> = ({ item }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0, y: '10vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative my-6 lg:my-4"
      viewport={{ once: true }}
    >
      <div className="mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[670px] lg:mx-0 lg:h-[280px] lg:w-[290px] xl:h-[450px] xl:w-[380px]">
        <Image
          src={item.imageUrl}
          alt={item.title}
          height={500}
          width={400}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="lg:gap-y-1">
        <h2 className="mt-5 font-serif text-3xl font-thin">{item.title}</h2>
        <p className=" mt-3 line-clamp-3">{item.description}</p>
        <div className="mt-1 py-3 lg:mt-4">
          <Link href={'/'} className="font-semibold underline">
            Read More
          </Link>
        </div>
        <span className="font-thin text-[#888]">{item.date}</span>
      </div>
    </motion.div>
  );
};

export default ArticleItem;
