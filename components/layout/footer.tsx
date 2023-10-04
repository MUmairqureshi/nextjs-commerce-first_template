import logo from 'components/images/dnk_logo_black.png';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Input } from 'src/components/ui/input';

// const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  // const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  // const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  // const menu = await getMenu('next-js-frontend-footer-menu');
  // const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-white text-center lg:mt-20 lg:text-start">
      <h3 className="border-b border-t border-gray-400 px-8 py-8 text-lg font-bold lg:px-20 lg:text-2xl">
        SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
      </h3>
      <div className="mx-4 my-10 flex flex-col gap-x-24 gap-y-10 px-4 py-10 md:flex-row md:gap-x-0 lg:mx-10 lg:gap-x-24 lg:px-10 xl:mx-10 xl:px-10">
        {/* Left Div */}
        <div className="basis-2/5 space-y-10 self-center md:basis-1/5 md:self-start lg:basis-2/5 lg:space-y-8">
          <Image className="ml-10 md:ml-0" src={logo} alt="logo" />
          <p className="text-paragraph w-52 font-bold md:text-start md:text-xl lg:w-72 xl:w-[400px] 2xl:w-[900px]">
            The best look anytime, anywhere.
          </p>
        </div>
        {/* Right Div */}
        <div className="text-grey grid basis-3/5 grid-cols-1 gap-y-10 md:basis-4/5 md:grid-cols-3 lg:basis-3/5">
          {/* <FooterMenu menu={menu} /> */}
          <div className="text center md:text-start">
            <h3 className="tracking-wide lg:text-lg">For Her</h3>
            <button>
              <ul className="mt-4 space-y-2 font-extralight md:text-start">
                <li>Women Jeans</li>
                <li>Tops and Shirts</li>
                <li>Women Jackets</li>
                <li>Heels and Flats</li>
                <li>Women Accessories</li>
              </ul>
            </button>
          </div>
          <div className="text center md:text-start">
            <h3 className="tracking-wide lg:text-lg">For Him</h3>
            <button>
              <ul className="mt-4 space-y-2 font-extralight md:text-start">
                <li>Men Jeans</li>
                <li>Men Shirts</li>
                <li>Men Shoes</li>
                <li>Men Accessories</li>
                <li>Men Jackets</li>
              </ul>
            </button>
          </div>
          <div className="text center md:text-start">
            <h3 className="tracking-wide lg:text-lg">Subscribe</h3>
            <button>
              <ul className="mt-4 space-y-6 text-center font-extralight md:text-start ">
                <Input
                  placeholder="Your Email Address..."
                  className="w-64 md:w-44 lg:w-52 xl:w-64"
                />
                {/* <Button className="bg-blue-600 text-white">SUBSCRIBE</Button> */}
              </ul>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[0.75px] border-t-gray-400"></div>

      {/* Bottom */}
      <div className=" mx-4 my-4 flex flex-col justify-between gap-x-72 gap-y-6 px-4 text-[#666] md:mx-6 md:flex-row md:px-6 lg:my-6 xl:mx-10 xl:px-10 2xl:gap-x-[600px]">
        <div className="text-center text-base md:text-start lg:text-xl xl:text-base">
          <p>Copyright © 2023 Brandstore.</p>
          <p>Powered by Brandstore.</p>
        </div>
        <div className="flex gap-x-4 self-center md:self-start">
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </footer>
    // <footer className="text-sm text-neutral-500 dark:text-neutral-400">
    //   <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
    //     <div>
    //       <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
    //         <LogoSquare size="sm" />
    //         <span className="uppercase">{SITE_NAME}</span>
    //       </Link>
    //     </div>
    //     <Suspense
    //       fallback={
    //         <div className="flex h-[188px] w-[200px] flex-col gap-2">
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //           <div className={skeleton} />
    //         </div>
    //       }
    //     >
    //       <FooterMenu menu={menu} />
    //     </Suspense>
    //     <div className="md:ml-auto">
    //       <a
    //         className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
    //         aria-label="Deploy on Vercel"
    //         href="https://vercel.com/templates/next.js/nextjs-commerce"
    //       >
    //         <span className="px-3">▲</span>
    //         <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
    //         <span className="px-3">Deploy</span>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
    //     <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
    //       <p>
    //         &copy; {copyrightDate} {copyrightName}
    //         {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
    //       </p>
    //       <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
    //       <p>Designed in California</p>
    //       <p className="md:ml-auto">
    //         Crafted by{' '}
    //         <a href="https://vercel.com" className="text-black dark:text-white">
    //           ▲ Vercel
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
}
