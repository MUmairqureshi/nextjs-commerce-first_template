'use client';
import { Transition } from '@headlessui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import logo1 from '/components/images/client-logo-1.png';
import logo2 from '/components/images/client-logo-2.png';
import logo3 from '/components/images/client-logo-3.png';
import logo4 from '/components/images/client-logo-4.png';
import logo5 from '/components/images/client-logo-5.png';
const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoRotator = () => {
  return (
    <div className="relative mx-auto my-10 items-center justify-center lg:my-0">
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col items-center overflow-hidden lg:flex-row lg:gap-x-32 xl:gap-x-40 2xl:gap-x-96">
          {logos.map((logo, index) => (
            <Transition
              key={index}
              show={true}
              enter="transition-transform transition-opacity ease-out duration-300"
              enterFrom="translate-x-[-100%] opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition-transform transition-opacity ease-in duration-300"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-[100%] opacity-0"
            >
              <div className={index === 0 ? 'mb-4 lg:mb-0' : ''}>
                <Image src={logo} alt="img" className="lg:w-full" />
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoRotator;
