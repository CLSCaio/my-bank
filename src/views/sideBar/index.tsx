'use client';

import Image from 'next/image';

import { Header, Help } from 'layouts';

export const SideBar = () => {
  return (
    <div className="flex flex-col justify-between items-center max-w-[280px] py-[24px]">
      <div className="flex flex-col items-center max-w-[280px]  py-[24px]">
        <Image src="/image/logo.svg" alt="logo" width={200} height={43.13} />
        <Header />
      </div>
      <Help />
    </div>
  );
};
