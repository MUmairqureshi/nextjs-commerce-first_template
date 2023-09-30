import Wrapper from '../Wrapper';
import MovingProducts from './moving-products';

export const ShopByCategory = () => {
  return (
    <Wrapper>
      <section className="py-20">
        <div className="mb-16 text-center text-2xl font-bold md:text-4xl">Shop By Categories</div>
        <MovingProducts />
      </section>
    </Wrapper>
  );
};