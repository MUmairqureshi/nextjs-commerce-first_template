'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from 'src/components/ui/button';
import Wrapper from '../Wrapper';

const HeroText = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-52 lg:mt-0"
      >
        <h1 className="mt-11 max-w-xl scroll-m-20 text-center text-3xl font-bold text-white opacity-90 transition delay-150 ease-in-out md:text-start md:text-5xl md:leading-tight lg:text-6xl 2xl:max-w-7xl">
          Raining Offers For Hot Summer!
        </h1>
        <h2 className="mt-9 max-w-sm text-center text-[19px] text-white transition delay-150 ease-in-out md:text-start md:text-2xl md:font-bold 2xl:max-w-4xl">
          25% Off On All Products
        </h2>
      </motion.div>

      <div className="mt-8 gap-x-4 md:flex">
        <Link href={'/'}>
          <Button className="w-full bg-white text-black">SHOP NOW</Button>
        </Link>
        <Link href={'/'}>
          <Button variant="outline" className="mt-4 w-full bg-transparent md:mt-0">
            FIND MORE
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default HeroText;
