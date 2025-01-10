'use client';

import React, { ReactNode, useState } from 'react';

import { Button, Input, InputProps } from 'components';

interface UserInputProps {
  children?: ReactNode;
  buttonLabel: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const UserInput = ({
  children,
  buttonLabel,
  onSubmit,
}: UserInputProps) => {
  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const inputs: InputProps[] = [
    {
      name: 'user',
      type: 'text',
      label: 'Usuário',
      value: userValue,
      onChange: (e) => setUserValue(e.currentTarget.value),
    },
    {
      name: 'password',
      type: 'password',
      label: 'Senha',
      value: passwordValue,
      onChange: (e) => setPasswordValue(e.currentTarget.value),
    },
  ];

  return (
    <form className="max-w-[360px]" onSubmit={onSubmit}>
      <div className="flex flex-col gap-[16px]">
        {inputs.map((rest) => (
          <Input key={rest.name} {...rest} />
        ))}
        {children}
        <Button label={buttonLabel} maxWidth={360} type="submit" />
      </div>
    </form>
  );
};
