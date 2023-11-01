/* eslint-disable unicorn/filename-case */
import Image from 'next/image';

const OurTeamCard = ({ data }: { data: any }) => {
  // console.log("data;", data)
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center gap-4 bg-background md:w-56">
      <Image
        src={data.featuredImage.url}
        width={data.featuredImage.width}
        height={data.featuredImage.height}
        className="h-24 w-24 rounded-full"
        alt="Member Image"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold">{data.title}</h2>
        <h4 className="mt-1 font-medium">{data.description}</h4>
      </div>
    </div>
  );
};

export default OurTeamCard;
