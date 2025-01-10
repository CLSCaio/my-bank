import { create } from 'zustand';

export type TActiveMenu =
  | 'painel'
  | 'wallet'
  | 'transfer'
  | 'services'
  | 'configs';

interface IUseActiveMenu {
  activeMenu: TActiveMenu;
  setActiveMenu: (newMenu: TActiveMenu) => void;
}

export const useActiveMenu = create<IUseActiveMenu>()((set) => ({
  activeMenu: 'painel',
  setActiveMenu: (newMenu) =>
    set({
      activeMenu: newMenu,
    }),
}));
