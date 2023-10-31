import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  height: number;
  width: number;
}
function Hero({ imageSrc, title, description, altText, height, width }: HeroProps) {
  const bgImage = imageSrc;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-full bg-cover bg-fixed bg-top bg-no-repeat "
      >
        <div className="flex h-[320px] w-full items-center justify-center backdrop-brightness-50 md:h-[440px]">
          <div className="text-4xl font-bold text-white md:text-5xl">Blogs</div>
        </div>
      </div>
      <section className=" mb-10 h-auto w-full  px-7">
        {/* <WhoWeAre /> */}
        <div className=" mt-10 flex items-center justify-center bg-background p-2 md:p-16">
          <div className="flex h-full w-full flex-col justify-between bg-white shadow-lg lg:flex-row">
            <div className="flex basis-1/2 flex-col items-center justify-center gap-6 px-4 py-12 md:items-start md:px-12">
              <div className="h-1 w-20 bg-primary" />
              <h1 className="leading-wider text-center text-3xl font-bold tracking-wider md:text-left md:text-4xl">
                {title}
              </h1>
              <p className="text-center font-light md:text-left">{description}</p>
            </div>
            <div className="basis-1/2">
              <Image
                src={imageSrc}
                alt={altText}
                height={height}
                width={width}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="relative w-full ">
          <div className="mt-3 h-full  ">
            <div className="relative h-[300px] w-full md:h-[500px]">
              <Image
                src={imageSrc}
                alt={altText}
                layout="fill"
                objectFit="cover"
                className="h-full  w-full object-cover" />
            </div>
            <div className="block bg-[#e0e7ed] px-4 py-8 font-serif md:hidden">
              <span className="mb-3 border-t-[1px] border-[#003445] pt-2 font-serif font-semibold uppercase leading-4 tracking-wider text-[#003445]">
                Featured
              </span>
              <h4 className="my-4 text-4xl font-bold capitalize leading-[48px] tracking-normal text-[#003445] ">
                {title}
              </h4>
              <p className=" m-0 text-sm text-black md:px-10">{description}</p>
            </div>
          </div>

          <div className="absolute -bottom-40 z-10 box-border   hidden  w-full   justify-center text-center md:flex">
            <div className="z-10  box-border hidden w-5/6 bg-[#003445] p-12 text-center   md:block lg:p-16 xl:p-20">
              <div className="mb-3 font-semibold uppercase leading-4 tracking-wider text-white">
                Featured
              </div>
              <h4 className="mb-4 text-4xl font-bold capitalize leading-[48px] tracking-normal text-white ">
                {title}
              </h4>
              <p className="text m-0 font-thin leading-6 tracking-normal text-white md:px-10">
                {description}
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Hero;
