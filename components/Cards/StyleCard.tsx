import Image from 'next/image';
import Link from 'next/link';

// interface PropData {
//   title: string;
//   category: string;
//   price: string;
//   stars: number;
// }
const StyleCard = ({
  title,
  price,
  image,
  url
}: {
  url: any;
  title: string;
  price: string;
  image: any;
}) => {
  // const url = title.split(' ').join('-');
  return (
    <div className="border-content hover:brightness-805 group relative box-content h-full w-[280px] overflow-hidden  rounded-sm hover:cursor-pointer">
      <Link href={`/product/${url}`}>
        <div className="border-content box-content h-[200px] w-full transform overflow-hidden transition-transform group-hover:scale-105 lg:h-[260px] ">
          <Image
            src={image}
            className="h-full w-full overflow-hidden"
            alt="product Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="  py-2">
        <div>
          <Link href={`/product/${url}`}>
            <h3 className="leading-2 m-0 p-0  text-xl  text-slate-800 ">{title}</h3>
          </Link>
          {/* <p className=" text-sm">{category}</p> */}
          <p className="text-xl  font-semibold leading-7 text-slate-800">{price}$</p>
        </div>
        <div className="mt-2">
          {/* <div className="mt-1 flex gap-2">
            {[...Array(stars)].map((e) => (
              <AiTwotoneStar color="#F59E0B" size="18 " />
            ))}
            {[...Array(5 - stars)].map((e) => (
              <AiTwotoneStar color="#D9D9D9" size="18 " />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
