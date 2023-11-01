/* eslint-disable unicorn/filename-case */
'use client';
import Image from 'next/image';
import { useState } from 'react';

const ImageCarousel = ({ imgData }: { imgData: any }) => {
  const [selectedImage, setSelectedImage] = useState(imgData[0]);
  return (
    <>
      <div className="border-content box-content grid h-full w-full  grid-cols-4 gap-4 ">
        <div className="border-content col-span-4 box-content grid w-full overflow-hidden">
          <Image
            src={selectedImage.url}
            alt={selectedImage.altText}
            className="h-full w-full object-cover"
            height={selectedImage.height}
            width={selectedImage.width}
            objectFit="cover"
          />
        </div>
        {imgData &&
          imgData.map((e: any, i: any) => (
            <div
              key={i}
              className={
                selectedImage.url == e.url
                  ? 'border-2 border-primary brightness-110 hover:cursor-pointer '
                  : 'border-0 brightness-90 hover:cursor-pointer'
              }
              onClick={() => setSelectedImage(e)}
            >
              <Image
                src={e.url}
                height={80}
                className="h-full w-full"
                width={80}
                alt={e.altText}
                objectFit="cover"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageCarousel;
