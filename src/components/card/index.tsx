import { IoAddCircleSharp } from 'react-icons/io5';

export interface CardProps {
  value?: string;
  title?: string;
  otherValue?: string;
  isDifferentCard?: boolean;
  isCardConfig?: boolean;
}

export const Card = ({
  otherValue,
  title,
  value,
  isCardConfig,
  isDifferentCard,
}: CardProps) => {
  return (
    <div
      style={{ backgroundColor: isCardConfig ? '#EAE9E9' : '#FFF' }}
      className="
          rounded-[8px] 
          flex flex-col
          p-[16px]
          w-[205px] h-[140px]
          drop-shadow-cardShadow
        "
    >
      {isCardConfig ? (
        <div
          className="
            flex flex-col justify-center
            items-center
            gap-[16px]
          "
        >
          <IoAddCircleSharp size={32} fill="#484848" />
          <p className="font-bold text-[18px] text-gray300 text-center">
            configurar <br /> atalhos
          </p>
        </div>
      ) : (
        <>
          {!isDifferentCard ? (
            <p className="font-light text-[24px] text-lemon-green">
              {otherValue}
            </p>
          ) : (
            <p className="flex items-center font-semibold text-[12px] text-text-default bg-lemon-green py-[4px] px-[8px] rounded-[6px] w-[129px] h-[22px]">
              {otherValue}
            </p>
          )}

          <div className="self-end">
            <p className="font-light text-[16px] text-gray300">{title}</p>
            <p className="font-bold text-[24px] text-gray300">{value}</p>
          </div>
        </>
      )}
    </div>
  );
};
