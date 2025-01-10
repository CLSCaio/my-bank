'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useDataUser } from 'store';

interface PrivatePagesProps {
  children: ReactNode;
}

export const PrivatePages = ({ children }: PrivatePagesProps) => {
  const { loginData } = useDataUser();
  const router = useRouter();

  useEffect(() => {
    if (!loginData.user) {
      router.push('/');
    }
  }, []);

  if (!loginData.user) {
    return <p>Carregando...</p>;
  }

  return <>{children}</>;
};
