import React from 'react';
import { Button } from '../button';

interface IExtract {
  name: string;
  title: string;
  subTitle: string;
  value: string;
}

interface IExtractCards {
  date: string;
  name: string;
  extract: IExtract[];
}

export const ExtractCard = () => {
  const extractCards: IExtractCards[] = [
    {
      date: '03/jan',
      name: 'extract 1',
      extract: [
        {
          name: 'data 1',
          title: 'Bazar Mizutu',
          subTitle: 'Compra no crédito',
          value: 'R$ 300,00',
        },
        {
          name: 'data 2',
          title: 'Lanchonete Dez',
          subTitle: 'Compra no débito',
          value: 'R$ 125,00',
        },
        {
          name: 'data 3',
          title: 'Loja Tatame velho',
          subTitle: 'Compra no débito',
          value: 'R$ 700,00',
        },
      ],
    },
    {
      date: '02/jan',
      name: 'extract 2',
      extract: [
        {
          name: 'data 4',
          title: 'Bazar Mizutu',
          subTitle: 'Compra no débito',
          value: 'R$ 12,00',
        },
        {
          name: 'data 5',
          title: 'Lanchonete Dez',
          subTitle: 'Compra no débito',
          value: 'R$ 85,00',
        },
        {
          name: 'data 6',
          title: 'Loja Tatame velho',
          subTitle: 'Compra no débito',
          value: 'R$ 200,00',
        },
      ],
    },
    {
      date: '01/jan',
      name: 'extract 3',
      extract: [
        {
          name: 'data 7',
          title: 'Restaurante Italiano',
          subTitle: 'Compra no débito',
          value: 'R$ 300,00',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col max-w-[533px] rounded-[8px] p-[24px] gap-[16px] bg-text-default text-gray300  drop-shadow-cardShadow">
      <h3 className="text-[18px] font-semibold">Últimas compras</h3>

      {extractCards.map(({ date, name, extract }) => (
        <div key={name} className="flex flex-col gap-[12px]">
          <p className="text-[14px] font-bold text-lemon-green">{date}</p>
          <div>
            {extract.map(({ name, title, subTitle, value }) => (
              <div
                key={name}
                className="flex justify-between items-center border-solid border-b-[1px] border-[#00000040] border-opacity-25"
              >
                <div className="w-max">
                  <p className="text-[14px]">{title}</p>
                  <p className="text-[12px] font-semibold text-gray400">
                    {subTitle}
                  </p>
                </div>
                <p className="text-[14px] font-semibold text-lemon-green">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button label="VER EXTRATO" type="button" maxWidth={169} />
      </div>
    </div>
  );
};
