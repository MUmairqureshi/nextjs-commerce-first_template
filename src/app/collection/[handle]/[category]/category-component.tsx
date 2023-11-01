/* eslint-disable react/jsx-key */
import Link from 'next/link';

const CategoryComponent = ({
  menu,
  params
}: {
  menu: any;
  params: { handle: string; category: string };
}) => {
  return (
    <div className="py-8">
      <h1 className="mb-8 text-xl">Categories</h1>
      <ul className="mt-5 items-center justify-center space-y-4 font-light">
        {menu.map((item: any, idx: number) => {
          // console.log("item",item)
          return (
            <div className="border-b-2 font-mono">
              <li key={idx} className="mb-4 flex justify-between text-black">
                <div className={`font-serif hover:text-indigo-600`}>
                  <Link href={`/collection/${params.handle}/${item.handle}`}>{item.title}</Link>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryComponent;
