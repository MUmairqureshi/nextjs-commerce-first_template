'use client';
import { motion } from 'framer-motion';
import { ShoppingBag, User2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import logo from '/components/images/dnk_logo.png';
// const { SITE_NAME } = process.env;

export default function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const menu = [
    {
      title: 'EVERYTHING',
      path: '/'
    },
    {
      title: 'MEN',
      path: '/category/men'
    },
    {
      title: 'WOMEN',
      path: '/WOMEN'
    },
    {
      title: 'ACCESSORIES',
      path: '/ACCESSORIES'
    }
  ];

  return (
    <motion.section
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="relative left-0 top-0 z-50 w-full bg-black  bg-opacity-10"
    >
      <div className="hidden items-center justify-between bg-[#0274be] bg-opacity-10 px-6 py-8 lg:flex lg:py-6">
        <div className="hidden flex-auto items-center justify-between lg:flex">
          <Link href={'../../'}>
            <Image className="scale-90 items-center" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden w-full items-center justify-between lg:flex">
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link href={item.path} className="items-center text-sm font-semibold text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="flex items-center gap-x-6 text-sm text-white">
            <li>
              <Link href={'/'}>ABOUT</Link>
            </li>
            <li>
              <Link href={'/blog'}>BLOG</Link>
            </li>
            <li className="font-semibold">
              <Link href={'/'}>$900.00</Link>
            </li>
            <li>
              <ShoppingBag />
            </li>
            <li>
              <User2 />
            </li>
          </ul>
        </div>
      </div>
      <MobileMenu menu={menu} />
    </motion.section>
    // <nav className="relative flex items-center justify-between p-4 lg:px-6">
    //   <div className="block flex-none md:hidden">
    //     <MobileMenu menu={menu} />
    //   </div>
    //   <div className="flex w-full items-center">
    //     <div className="flex w-full md:w-1/3">
    //       <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
    //         <LogoSquare />
    //         <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
    //           {SITE_NAME}
    //         </div>
    //       </Link>
    //       {menu.length ? (
    //         <ul className="hidden gap-6 text-sm md:flex md:items-center">
    //           {menu.map((item: Menu) => (
    //             <li key={item.title}>
    //               <Link
    //                 href={item.path}
    //                 className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
    //               >
    //                 {item.title}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       ) : null}
    //     </div>
    //     <div className="hidden justify-center md:flex md:w-1/3">
    //       <Search />
    //     </div>
    //     <div className="flex justify-end md:w-1/3">
    //       <Suspense fallback={<OpenCart />}>
    //         <Cart />
    //       </Suspense>
    //     </div>
    //   </div>
    // </nav>
  );
}
