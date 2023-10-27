// 'use client';
import logo from 'components/images/dnk_logo_black.png';
import { getMenu } from 'lib/shopify';
import { ShoppingBag, User2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from 'src/components/ui/sheet';
import MobileMenu from './mobile-menu';
import Search from './search';

const SHEET_SIDES = ['top'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 ">
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
                className="lucide lucide-search -mr-4"
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

// const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('header_menu');
  // console.log("menu",menu)
  return (
    <div className="relative left-0 top-0 z-50 w-full bg-black ">
      {/* <motion.section
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="relative left-0 top-0 z-50 w-full bg-black  bg-opacity-10"
    > */}
      <div className="hidden items-center justify-between bg-white px-6 py-8 lg:flex lg:py-0">
        <div className="hidden flex-auto items-center justify-between lg:flex">
          <Link href={'../../'}>
            <Image className="scale-90 items-center" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden w-full items-center justify-between lg:flex lg:px-10">
          {menu.length ? (
            <ul className="hidden gap-8 text-sm md:flex md:items-center">
              {menu.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`/collection/${item.title.toLocaleLowerCase()}`}
                    className="items-center text-sm font-semibold uppercase text-black"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="flex items-center gap-x-6 text-sm text-black">
            <li>{SheetSide()}</li>
            <li>
              <Link href={'/about'}>ABOUT</Link>
            </li>
            <li>
              <Link href={'/blog'}>BLOG</Link>
            </li>
            {/* <li className="font-semibold">
              <Link href={'/'}>$900.00</Link>
            </li> */}
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
    </div>

    // </motion.section>
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
