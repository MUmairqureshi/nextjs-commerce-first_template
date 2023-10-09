import image from 'components/images/blue_tshirt_darkblue.jpg';
import StyleCard from '../Cards/StyleCard';
const Data = [
  { title: 'DNK Blue Shores', category: 'Men', price: '400-1000', stars: 4 },
  { title: 'XYZ Red Waves', category: 'Women', price: '350-700', stars: 5 },
  { title: 'PQR Ocean Breeze', category: 'Men', price: '500-1200', stars: 4 }
];
const RelatedProducts = () => {
  return (
    <div className="mt-16 w-full">
      <h3 className="m-0 mb-10 p-0 text-2xl font-semibold md:text-3xl">Related Products</h3>
      <div className="flex  flex-wrap justify-start gap-x-6 gap-y-12 md:justify-start lg:gap-x-10 lg:gap-y-16 ">
        {Data.map((item, ind) => {
          return (
            // <motion.div
            //   key={ind}
            //   viewport={{ once: false }}
            //   initial={{ opacity: 0 }}
            //   whileInView={{ opacity: 1 }}
            //   transition={{ duration: 1.2, delay: 0.4 * ind }}
            // >
            <StyleCard title={item.title} image={image} price={item.price} url={item.title} />
            // </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
