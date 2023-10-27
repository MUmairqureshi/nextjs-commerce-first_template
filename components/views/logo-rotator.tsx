import { getProduct } from 'lib/shopify';
import Image from 'next/image';

const LogoRotator = async () => {
  const logos = await getProduct('logos');
  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        <div className="flex">
          {logos?.images.map((logo, index) => (
            <div key={index} className={`mx-auto ${index === 0 ? '' : 'hidden lg:flex'}`}>
              <Image
                src={logo.url}
                alt={logo.altText}
                width={logo.width}
                height={logo.height}
                className="lg:w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoRotator;
