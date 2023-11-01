import Collections from 'components/layout/search/collections';
import { Suspense } from 'react';
import Navbar from '../collection/navbar';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense>
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 bg-slate-100 py-8 text-black dark:text-white md:px-7 md:py-16 md:pb-4 lg:flex-row">
          <div className="order-first mx-auto w-full flex-none lg:max-w-[260px]">
            <Collections />
          </div>
          <div className="order-last min-h-screen w-full bg-white md:order-none">{children}</div>
          {/* <div className="order-none flex-none md:order-last md:w-[125px]">
      <FilterList list={sorting} title="Sort by" />
    </div> */}
        </div>
        {/* <Footer /> */}
      </Suspense>
    </>
  );
}
