import { ChangeEvent } from 'react';

export interface InputProps {
  name: string;
  type: 'text' | 'password';
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxWidth?: number;
  height?: number;
}

export const Input = ({
  name,
  label,
  maxWidth,
  height,
  ...rest
}: InputProps) => {
  return (
    <div
      className="flex flex-col gap-[4px] h-[72px]"
      style={{
        maxWidth: `${maxWidth || 360}px`,
        height: `${height || 46}px`,
      }}
    >
      <label className="text-[18px]" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        {...rest}
        className="
          pl-[4px]
          rounded-[6px] 
          border-[2px] 
          border-solid
          border-gray100
        "
      />
    </div>
  );
};
