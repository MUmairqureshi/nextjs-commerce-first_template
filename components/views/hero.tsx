import HeroText from './hero-text';

export async function Hero() {
  return (
    <div className="relative -top-32 h-[600px] overflow-hidden bg-hero-bg bg-cover bg-center bg-no-repeat">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-40 bg-fixed">
        <div className="flex h-full items-center ">
          <div className="text-white">
            <HeroText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
