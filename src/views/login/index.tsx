'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Checkbox, CheckboxProps } from 'components';
import { UserInput } from 'layouts';
import { useDataUser } from 'store';

export const Login = () => {
  const [rememberDataMark, setRememberDataMarkValue] = useState<
    'false' | 'true'
  >('false');

  const { login, sucessOrError, setSucessOrError } = useDataUser();
  const router = useRouter();

  const checkbox: CheckboxProps = {
    name: 'rememberData',
    label: 'Lembrar dispositivo',
    value: rememberDataMark,
    onChange: () =>
      setRememberDataMarkValue(rememberDataMark === 'true' ? 'false' : 'true'),
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    login({
      user: data.user as string,
      password: data.password as string,
      rememberData: data.rememberData === 'true' ? true : false,
    });
  };

  useEffect(() => {
    if (sucessOrError) {
      router.push('/dashboard');
      setSucessOrError(false);
    }
  }, [sucessOrError, setSucessOrError, router]);

  return (
    <div className="flex flex-col max-w-[640px] items-center justify-center gap-[24px] px-[24px]">
      <div className="h-[129px] max-w-[360px] flex flex-col ">
        <h1 className="font-bold text-[48px]">
          Bem vindo <span className="text-lemon-green">:)</span>
        </h1>
        <h2 className="font-light text-[24px]">Entre na sua conta</h2>
      </div>
      <UserInput buttonLabel="ENTRAR" onSubmit={onSubmit}>
        <div className="flex justify-between items-center ">
          <Checkbox {...checkbox} />
          <a className="text-aqua text-[14px] font-semibold" href="">
            Esqueceu sua senha?
          </a>
        </div>
      </UserInput>

      <p className="w-full text-[24px] flex justify-center flex-wrap break-words gap-[8px]">
        Não tem conta?
        <a href="/register" className="text-lemon-green font-semibold ">
          Faça uma agora
        </a>
      </p>
    </div>
  );
};
