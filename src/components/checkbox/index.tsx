import { ChangeEvent } from 'react';

export interface CheckboxProps {
  name: string;
  label: string;
  value: 'false' | 'true';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ name, label, value, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-[4px] h-[14px] w-max">
      <input type="checkbox" name={name} value={value} onChange={onChange} />
      <label className="text-[14px] font-semibold" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
