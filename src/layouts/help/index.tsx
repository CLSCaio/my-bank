import { Button } from 'components';

export const Help = () => {
  return (
    <div className="flex flex-col h-[198px] w-[220px] rounded-[6px] p-[16px] gap-[16px] bg-lemon-green">
      <h2 className="text-[24px] font-bold text-text-default w-[101px] h-[58px]">
        Precisa de ajuda?
      </h2>
      <p className="text-[16px] text-text-default w-[140px] h-[58px]">
        Fale com um dos nossos especialistas
      </p>
      <Button label="CONTATAR" maxWidth={144} withBorder type="button" />
    </div>
  );
};
