import { FaCircleUser, FaBell } from 'react-icons/fa6';
import { HiMagnifyingGlass } from 'react-icons/hi2';

import { useDataUser } from 'store';

export const Menu = () => {
  const { loginData } = useDataUser();

  return (
    <div className="flex items-center justify-between max-w-[1087px]">
      <div className="max-w-[240px] h-[36px] rounded-[6px] border-solid border-[1px] flex items-center gap-[16px] border-text-default pl-[8px]">
        <HiMagnifyingGlass size={20} fill="#FFF" />
        <p className="text-text-default text-[16px]"> Buscar </p>
      </div>
      <div className="flex items-center w-max gap-[24px]">
        <FaBell fill="#FFF" />
        <div className="flex items-center gap-[8px] text-text-default text-[16px]">
          <FaCircleUser fill="#FFF" />
          <p>Bem vindo,</p>
          <span className="font-bold capitalize"> {loginData.user}</span>
        </div>
      </div>
    </div>
  );
};
