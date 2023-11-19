import logo from 'components/images/dnk_logo_black.png';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';

const footer = async () => {
  const footer = await getMenu('footer');
  // const women_menu = await getMenu('footer_women');
  // const child_menu = await getMenu('footer_child');

  const [men, women, child] = footer;

  // console.log("men",men)
  return (
    <div>
      <div className=" w-full border-y-2  border-gray-300 p-10 text-center">
        <h1 className="text-2xl font-bold transition duration-300 hover:cursor-pointer hover:text-primary">
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS
        </h1>
      </div>
      <div className="mx-auto grid border-b-2 border-gray-300 px-8 py-16 md:grid-cols-6">
        <div className="sm:col-span-2">
          <Image src={logo} alt="logo" />
          <h2 className="mt-2 text-xl	 font-bold leading-10 tracking-wider">
            The best look anytime, anywhere.
          </h2>
        </div>
        <div className="p-3">
          <h2 className="trading-wider  mb-6 text-lg font-medium">For Her</h2>
          <ul>
            {women?.subMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mb-2 text-base font-light text-gray-600 hover:cursor-pointer hover:text-primary"
                >
                  <a href={item.path.replace('/collections/', '/collection/women_category/')}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-3">
          <h2 className="trading-wider  mb-6 text-lg font-medium">For Him</h2>
          <ul>
            {men?.subMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mb-2 text-base font-light text-gray-600 hover:cursor-pointer hover:text-primary"
                >
                  <a href={item.path.replace('/collections/', '/collection/men_category/')}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-3">
          <h2 className="trading-wider  mb-6 text-lg font-medium">For Child</h2>
          <ul>
            {child?.subMenu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mb-2 text-base font-light text-gray-600 hover:cursor-pointer hover:text-primary"
                >
                  <a href={item.path.replace('/collections/', '/collection/child_category/')}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-6 p-3">
          <h2 className="trading-wider  text-lg  font-medium">Subscribe</h2>
          <Input type="email" placeholder="Your email address .." />
          <Button className="text-white" variant="default">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full p-6 text-center">
        <p>Copyright © 2023 Panacloud</p>
      </div>
    </div>
  );
};

export default footer;
