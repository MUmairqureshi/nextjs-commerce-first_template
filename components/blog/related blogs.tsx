import { data } from 'lib/blogdata';
import Image from 'next/image';

import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  coverImage: string;
  body: {
    para1: string;
    para2: string;
    para3: string;
    img1: string;
    img2: string;
  };
};

const Card = ({ id }: any) => {
  // const id =
  const postToDisplay = data.find((post) => post.id === id);
  const coverImage: string = postToDisplay?.coverImage as string;
  return (
    <Link className="w-full py-6 pr-4 md:w-1/2 lg:w-1/4" href={`/blog/${id}`}>
      <div className="flex w-full flex-col gap-2.5 ">
        <div className="relative h-44 w-full overflow-hidden bg-red-200">
          <Image src={coverImage} alt="" objectFit="cover" fill />
        </div>
        <div className="flex flex-col gap-2.5 py-3">
          <p className="text-xl">{postToDisplay?.title}</p>
          <p className="text-xs">{postToDisplay?.description}</p>
          <p className="text-xs">{postToDisplay?.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
