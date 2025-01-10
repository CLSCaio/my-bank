import { Card, CardProps, CreditCard, ExtractCard } from 'components';

interface ICards extends CardProps {
  name: string;
}

export const Painel = () => {
  const cards: ICards[] = [
    {
      isCardConfig: false,
      title: 'Gasto esse mês',
      otherValue: '+23%',
      value: 'R$ 3.547,67',
      name: 'card 1',
    },
    {
      isCardConfig: false,
      title: 'Recebido esse mês',
      otherValue: '+6%',
      value: 'R$ 7.648,48',
      name: 'card 2',
    },
    {
      isCardConfig: false,
      title: 'Investimentos',
      isDifferentCard: true,
      otherValue: '+R$ 242,13 (+2.54%)',
      value: 'R$ 9.532,62',
      name: 'card 3',
    },
    {
      isCardConfig: false,
      title: 'Recebido esse mês',
      value: 'R$ 9.532,62',
      name: 'card 4',
    },
    {
      isCardConfig: true,
      name: 'card 5',
    },
  ];

  return (
    <div className="flex flex-col items-center h-[749px] max-w-[1087px] rounded-[8px] py-[30px] gap-[24px]">
      <div className="flex gap-[16px]">
        {cards.map(({ name, ...rest }) => (
          <Card key={name} {...rest} />
        ))}
      </div>
      <div className="flex gap-[24px]">
        <CreditCard />
        <ExtractCard />
      </div>
    </div>
  );
};
