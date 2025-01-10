'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Login } from 'views';
import { Banner } from 'layouts';
import { useDataUser } from 'store';

const Home = () => {
  const { loginData } = useDataUser();
  const router = useRouter();

  useEffect(() => {
    document.title = 'My Bank - Home';

    if (loginData.user) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <div className="flex w-screen h-screen justify-center">
      <Banner />
      <Login />
    </div>
  );
};

export default Home;
