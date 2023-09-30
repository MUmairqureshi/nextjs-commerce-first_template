'use client';
import Wrapper from 'components/Wrapper';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from 'src/components/ui/button';
import women from '/components/images/first.jpg';
import men from '/components/images/second.jpg';
import sandle from '/components/images/third.jpg';

const products = [
  {
    id: 1,
    title: '20% Off On Tank Tops',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
    image: women,
    initial: { x: -90, opacity: 0.2 },
    animate: { x: 0, opacity: 1 }
  },
  {
    id: 2,
    title: 'Latest Eyewear For You',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
    image: men,
    initial: { y: 50, opacity: 0.2 }, // Initial position from the top
    animate: { y: 0, opacity: 1 }
  },
  {
    id: 3,
    title: "Let's Lorem Suit Up!",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
    image: sandle,
    initial: { x: 90, opacity: 0.2 }, // Initial position from the right
    animate: { x: 0, opacity: 1 }
  }
];

export default function ProductList() {
  const itemsToShow = 3; // Number of products to show
  const currentIndex = 0; // Starting index, you can change this as needed
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const displayedItems = products.slice(currentIndex, currentIndex + itemsToShow);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // You can adjust the scroll position at which the animations trigger
    const triggerPosition = 200;

    products.forEach((product) => {
      if (scrollY > triggerPosition) {
        controls.start(product.animate);
      }
    });
  }, [scrollY, controls]);

  return (
    <Wrapper>
      <section className="py-10 lg:py-28">
        <div className="flex flex-col items-center justify-center gap-y-6 md:grid md:grid-cols-[repeat(3,auto)] md:gap-x-5 2xl:gap-x-96 ">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={item.initial}
              animate={controls}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-[290px] w-[290px] md:h-[580px] md:w-[220px] lg:h-[480px] lg:w-[320px] xl:h-[470px] xl:w-[370px]">
                {/* Dull black overlay */}
                <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt="Product"
                  height={500}
                  width={400}
                  className="z-0 h-full w-full object-cover object-top md:object-right-top"
                />
              </div>
              <div className="absolute inset-0 z-20 m-5 flex flex-col items-start justify-end gap-y-4 text-lg font-semibold text-white lg:m-6 lg:space-y-1 xl:m-10">
                <h2 className="mt-3 text-2xl">{item.title}</h2>
                <p className="text-sm font-[350]">{item.description}</p>
                <Button className="w-full lg:w-40 ">SHOP NOW</Button>
                {/* <Link href="#" className="mt-2 bg-[#212121] text-white px-4 py-2 rounded-md text-sm hover:bg-[#000] transition-colors duration-300">
                    Buy Now
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
