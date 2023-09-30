'use client';

import Card from 'components/blog/related blogs';
import { data } from 'lib/blogdata';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// const len = data.length
// function getRandomInteger(min : number, max : number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const dataGrd = [data[getRandomInteger(0, len)], data[getRandomInteger(0, len)], data[getRandomInteger(0, len)], data[getRandomInteger(0, len)]]

const Post = () => {
  const id = Number(usePathname().slice(6));
  const postToDisplay = data.find((post) => post.id === id);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <div
        className="flex h-screen w-full flex-col items-center justify-end gap-5 bg-gray-400 px-6 pb-28"
        //   style={{background: `url(${postToDisplay?.coverImage})` ,
        //   backgroundRepeat : 'no-repeat' ,
        //   backgroundSize : 'cover' ,
        //   backgroundBlendMode : 'overlay'
        // }}
      >
        <p className="text-xl text-white md:text-xl">{postToDisplay?.date}</p>
        <p className="text-center text-4xl text-white md:text-6xl">{postToDisplay?.title}</p>
        <p className="text-xl uppercase text-white md:text-xl">by {postToDisplay?.author}</p>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center gap-12 px-6 md:px-28 ">
        {postToDisplay?.body.map((item) => {
          return (
            <>
              <p className="text-base">{item.para1}</p>
              <div className="relative h-96 w-full overflow-hidden">
                <Image src={item?.img1} alt="" objectFit="cover" fill />
              </div>
              <p className="text-base">{item.para2}</p>
              <div className="relative h-96 w-full overflow-hidden">
                <Image src={item?.img2} alt="" objectFit="cover" fill />
              </div>
              <p className="text-base">{item.para3}</p>
            </>
          );
        })}

        <div className="flex w-full flex-col gap-2">
          <p>
            <span className="text-bold">Author:</span> {postToDisplay?.author}
          </p>
          <p>
            <span className="text-bold">Date Published:</span> {postToDisplay?.date}
          </p>
          <p>
            <span className="text-bold">Blog Id:</span> {postToDisplay?.id}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 px-6">
        <p className="text-4xl">Related</p>
        <div className="items-top flex w-full flex-col flex-wrap md:flex-row">
          {data.map((post) => {
            return <Card id={post.id} />;
          })}
          {/* <Card id={postToDisplay?.id}/>
          <Card id={postToDisplay?.id}/>
          <Card id={postToDisplay?.id}/> */}
        </div>
      </div>
    </div>
  );
};

// <div>

//   <div
//   className='h-screen w-full mb-10'
//   style={{background: `url(${postToDisplay?.['cover-image']})` ,
//   backgroundRepeat : 'no-repeat' ,
//   backgroundSize : 'cover'
// }}

// >

//     <div className='w-full h-full flex flex-col items-center justify-center backdrop-brightness-50 px-6'>
//       <h1 className='md:text-8xl text-bold text-3xl text-white mb-10 md:text-center w-full'>{postToDisplay?.title}</h1>
//       <p className='tex-white md:text-3xl text-xl md:text-center text-white'>{postToDisplay?.description}</p>
//     </div>
//   </div>

//   <p className='md:text-lg text-lg mb-10 md:px-24 px-6'>{postToDisplay?.body}</p>

//   <div className='flex flex-wrap justify-between px-6'>
//       {dataGrd.map((post) => (
//         <Card
//         title = {post.title}
//         image = {post.image}
//         id={post.id}
//         description={post.description}
//         />
//       ))}
//   </div>
//   </div>
// )
// }

export default Post;
