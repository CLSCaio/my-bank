import { Button } from 'components';
import Image from 'next/image';

export const CreditCard = () => {
  return (
    <div className="flex flex-col max-w-[532px] h-[300px] rounded-[8px] p-[24px] gap-[16px] bg-text-default text-gray300  drop-shadow-cardShadow">
      <h3 className="font-semibold text-[18px]">Cartões</h3>
      <div className="flex justify-between">
        <Image
          src="/image/creditCard.svg"
          alt="credit-card"
          width={240}
          height={140}
        />
        <div className="flex flex-col justify-between w-[187px] h-[120px]">
          <div>
            <p className="font-light text-[16px]">Limite disponível</p>
            <p className="font-semibold text-[24px]">R$ 3.000,00</p>
          </div>
          <div>
            <p className="font-light text-[16px]">Última compra</p>
            <div className="flex justify-between font-semibold text-[16px]">
              <p>Bazar Mizuzi</p>
              <p>R$ 300,00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[240px]">
          <Image
            src="/image/sliderRange.svg"
            alt="slider-range"
            width={240}
            height={8}
          />
          <div className="flex justify-between text-gray300 text-[14px]">
            <p>Limite mensal</p> <p>R$ 300/3000</p>
          </div>
        </div>
        <Button label="MAIS DETALHES" type="button" />
      </div>
    </div>
  );
};
