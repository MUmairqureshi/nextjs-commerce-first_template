/* eslint-disable unicorn/filename-case */
import { FC, ReactNode } from 'react';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-3 px-3 md:mx-6 md:px-6 xl:mx-16 xl:px-16 2xl:mx-96 2xl:px-96">
      {children}
    </div>
  );
};

export default Wrapper;
