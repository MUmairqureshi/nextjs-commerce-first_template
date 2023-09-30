import Image from 'next/image';
import Wrapper from '../Wrapper';
import end_of_season_sale from '/components/images/end_of_season_sale.jpeg';
import end_of_season_sale_accessories from '/components/images/end_of_season_sale_accessories.jpeg';
import end_of_season_sale_all from '/components/images/end_of_season_sale_all.jpeg';
import end_of_season_sale_men from '/components/images/end_of_season_sale_men.jpeg';
import end_of_season_sale_women from '/components/images/end_of_season_sale_women.jpeg';
export const Sales = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-y-6 py-20">
        <div className="flex flex-col gap-y-6 md:flex-row lg:gap-x-4">
          <div className="relative flex-1">
            <div className="relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[350px] lg:mx-0 lg:h-[280px] lg:w-[450px] xl:h-[470px] xl:w-[630px] 2xl:h-[470px] 2xl:w-[1200px]">
              {/* Image */}
              <Image
                src={end_of_season_sale}
                alt="50% off"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />

              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

              {/* Text */}
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
                <h1>50% off</h1>
                <p>End of season sale</p>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[350px] lg:mx-0 lg:h-[280px] lg:w-[450px] xl:h-[470px] xl:w-[630px] 2xl:h-[470px] 2xl:w-[1200px]">
              <Image
                src={end_of_season_sale_all}
                alt="50% off"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />

              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

              {/* Text */}
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
                <h1>25% off</h1>
                <p>On all products</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-3 lg:gap-x-4 xl:gap-x-6 ">
          <div className="relative">
            <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[230px] lg:mx-0 lg:h-[280px] lg:w-[300px] xl:h-[470px] xl:w-[410px] 2xl:h-[470px] 2xl:w-[790px]">
              <Image
                src={end_of_season_sale_men}
                alt="50% off"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top "
              />
              {/* Dull black overlay */}
              <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
              {/* Text */}
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
                <h1>Shop&apos;s Men</h1>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[230px] lg:mx-0 lg:h-[280px] lg:w-[300px] xl:h-[470px] xl:w-[410px] 2xl:h-[470px] 2xl:w-[790px]">
              <Image
                src={end_of_season_sale_women}
                alt="50% off"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
                <h1>Shop&apos;s Women</h1>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className=" relative mx-auto h-[290px] w-[270px] md:h-[280px] md:w-[230px] lg:mx-0 lg:h-[280px] lg:w-[300px] xl:h-[470px] xl:w-[410px] 2xl:h-[470px] 2xl:w-[790px]">
              <Image
                src={end_of_season_sale_accessories}
                alt="50% off"
                height={500}
                width={400}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center text-xl font-bold text-white lg:text-3xl xl:text-4xl">
                <h1>Shop&apos;s Accessories</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
