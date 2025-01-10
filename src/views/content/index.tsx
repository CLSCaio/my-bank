import React, { ReactNode } from 'react';

import { BackgroundView, Menu } from 'layouts';
import { useActiveMenu, TActiveMenu } from 'store';

import { Painel } from '../painel';

interface IViews {
  name: TActiveMenu;
  view?: ReactNode;
}

export const Content = () => {
  const { activeMenu } = useActiveMenu();

  const views: IViews[] = [
    {
      name: 'painel',
      view: <Painel />,
    },
    {
      name: 'wallet',
    },
    {
      name: 'transfer',
    },
    {
      name: 'services',
    },
    {
      name: 'configs',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-lemon-green w-full gap-[43px]">
      <Menu />
      {views.map(
        ({ name, view }) =>
          activeMenu === name && (
            <React.Fragment key={name}>
              {view ? view : <BackgroundView />}
            </React.Fragment>
          )
      )}
    </div>
  );
};
