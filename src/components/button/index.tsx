export interface ButtonProps {
  label: string;
  type: 'button' | 'submit';
  maxWidth?: number;
  onSubmit?: () => void;
  withBorder?: boolean;
  className?: string;
}

export const Button = ({
  label,
  maxWidth,
  withBorder,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      style={{
        maxWidth: `${maxWidth || 186}px`,
        borderColor: withBorder ? '#FFF' : 'transparent',
      }}
      className={`
        bg-lemon-green
        border-[2px]
        w-full 
        h-[38px] 
        text-[18px]
        border-solid
        font-semibold
        rounded-[6px] 
        text-white
        flex
        justify-center
        items-center
      `}
    >
      {label}
    </button>
  );
};
