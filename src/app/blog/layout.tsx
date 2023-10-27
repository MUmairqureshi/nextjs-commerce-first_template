import { ReactNode } from 'react';
import Navbar from '../collection/navbar';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="en">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
