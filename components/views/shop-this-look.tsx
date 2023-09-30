import Image from 'next/image';
import Wrapper from '../Wrapper';
import ItemLook from './item-look';
import shop_by_look_right from '/components/images/shop_by_look_right.png';

export const ShopThisLook = () => {
  return (
    <Wrapper>
      <section className="py-20">
        <div className="mb-16 text-center text-2xl font-bold md:text-4xl">Shop By Categories</div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-1">
            <ItemLook />
          </div>
          <div className="flex-1">
            <Image src={shop_by_look_right} alt="product image"></Image>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
