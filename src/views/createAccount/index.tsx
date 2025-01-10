'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useDataUser } from 'store';
import { UserInput } from 'layouts';

export const CreateAccount = () => {
  const { addUser, sucessOrError, setSucessOrError } = useDataUser();
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    addUser({
      user: data.user as string,
      password: data.password as string,
    });
  };

  useEffect(() => {
    if (sucessOrError) {
      router.push('/');
      setSucessOrError(false);
    }
  }, [sucessOrError, setSucessOrError, router]);

  useEffect(() => {
    document.title = 'My Bank - Register';
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[24px]">
      <div className="h-[129px] max-w-[360px] flex flex-col ">
        <h1 className="font-bold text-[48px]">
          Bem vindo <span className="text-lemon-green">:)</span>
        </h1>
        <h2 className="font-light text-[24px]">Crie sua conta aqui</h2>
      </div>

      <UserInput buttonLabel="REGISTRAR" onSubmit={onSubmit} />
    </div>
  );
};
