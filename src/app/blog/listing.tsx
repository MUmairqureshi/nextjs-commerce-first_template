import { Product } from 'lib/shopify/types';
import CardComponent from './card-component';

const CardListingScetion = ({ Products }: { Products: Product[] }) => {
  return (
    <div className="grid w-full grid-cols-1  gap-x-6 gap-y-8 bg-white px-7 py-10 md:grid-cols-2 lg:grid-cols-3">
      {Products?.map((item, ind) => {
        return (
          <CardComponent
            key={ind}
            altText={item.featuredImage.altText}
            name={item.title}
            description={item.description}
            imageSrc={item.featuredImage.url}
          />
        );
      })}
    </div>
  );
};

export default CardListingScetion;
