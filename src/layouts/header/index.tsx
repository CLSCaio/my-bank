import { AiFillHome } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { GoGear } from 'react-icons/go';
import { RiWallet3Fill } from 'react-icons/ri';

import { useActiveMenu, TActiveMenu } from 'store';

export const Header = () => {
  const { activeMenu, setActiveMenu } = useActiveMenu();

  const changeColor = (menu: string) =>
    activeMenu === menu ? '#FFF' : '#484848';

  const menus = [
    {
      icon: <AiFillHome fill={changeColor('painel')} size={16} />,
      name: 'painel',
      label: 'Painel',
    },
    {
      icon: <RiWallet3Fill fill={changeColor('wallet')} size={16} />,
      name: 'wallet',
      label: 'Carteira',
    },
    {
      icon: <BiTransfer fill={changeColor('transfer')} size={16} />,
      name: 'transfer',
      label: 'Transferência',
    },
    {
      icon: <CgMenuGridO fill={changeColor('services')} size={16} />,
      name: 'services',
      label: 'Serviços',
    },
    {
      icon: <GoGear fill={changeColor('configs')} size={16} />,
      name: 'configs',
      label: 'Configurações',
    },
  ];

  return (
    <header className="flex flex-col w-full gap-[4px] mt-[60px]">
      {menus.map(({ name, label, icon }) => (
        <div
          key={name}
          onClick={() => setActiveMenu(name as TActiveMenu)}
          className={`
              cursor-pointer
              flex 
              items-center 
              gap-[10px] 
              self-end 
              max-w-[240px] 
              h-[54px] 
              pl-[24px] 
              rounded-tl-[12px] 
              rounded-bl-[12px]
              bg-${activeMenu === name ? 'lemon-green' : 'text-default'}
            `}
        >
          {icon}
          <h3 className={`text-[${changeColor(name).replace(/'/g, '')}]`}>
            {label}
          </h3>
        </div>
      ))}
    </header>
  );
};
