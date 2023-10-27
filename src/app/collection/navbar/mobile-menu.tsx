'use client';
import { motion } from 'framer-motion';

// import { Dialog, Transition } from '@headlessui/react';
import { Menu } from 'lib/shopify/types';
import { AlignJustify, ShoppingBag, User2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from 'src/components/ui/sheet';
import Search from './search';
import logo_mobile from '/components/images/logo_mobile.png';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// import Search from './search';
const SHEET_SIDES = ['top'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search -mr-3"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent side={side} className="bg-white">
            <Search />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  // console.log("menu",menu)
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 flex w-full flex-auto justify-between bg-white p-3 lg:hidden"
      >
        <Image className="items-center" src={logo_mobile} height={100} width={100} alt="logo" />
        <div className="flex items-center gap-x-4 lg:hidden">
          <ul className="flex gap-x-2">
            {/* <li className="font-semibold">
              <Link href={'/'}>$900.00</Link>
            </li> */}
            <li>{SheetSide()}</li>
            <li>
              <ShoppingBag />
            </li>
          </ul>
          <Sheet>
            <SheetTrigger>
              {/* <Menu className="h-7 w-7" /> */}
              <AlignJustify className="h-7 w-7" />
            </SheetTrigger>
            <SheetContent>
              <div className="mt-20 flex flex-col items-start">
                <User2 />
                {menu.length ? (
                  <ul className="mt-5 flex flex-col items-start gap-6 gap-x-8 gap-y-3 bg-white text-start text-sm md:flex md:items-center lg:hidden">
                    {menu.map((item) => (
                      <li className="border-b border-gray-300 py-2 text-sm" key={item.title}>
                        <Link
                          href={item.path}
                          className="uppercase text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </>
  );
}
