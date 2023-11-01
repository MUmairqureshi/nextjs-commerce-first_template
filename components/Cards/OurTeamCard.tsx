import { Product } from 'lib/shopify/types';
import Image from 'next/image';

interface PropType {
  img: any;
  name: string;
  post: string;
}
const OurTeamCard = ({ data }: { data: Product }) => {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center gap-4 bg-background md:w-56">
      <Image
        src={data?.featuredImage?.url}
        height={data?.featuredImage?.height}
        width={data?.featuredImage?.width}
        className="h-24 w-24 rounded-full"
        alt={data?.featuredImage?.altText}
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold">{data?.title}</h2>
        <h4 className="mt-1 font-medium">{data?.description}</h4>
      </div>
    </div>
  );
};

export default OurTeamCard;
