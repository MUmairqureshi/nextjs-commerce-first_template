/* eslint-disable unicorn/filename-case */
import { FC, ReactNode } from 'react';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mx-3 px-3 lg:mx-5 lg:px-5">{children}</div>;
};

export default Wrapper;
