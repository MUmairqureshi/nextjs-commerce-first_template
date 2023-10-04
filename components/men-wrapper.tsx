import { FC, ReactNode } from 'react';

const MenWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-1 px-1 md:mx-3 md:px-3 xl:mx-8 xl:px-8 2xl:mx-80 2xl:px-80">{children}</div>
  );
};

export default MenWrapper;
