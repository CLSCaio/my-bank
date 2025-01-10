'use client';

import React, { useEffect } from 'react';

import { SideBar, Content } from 'views';

import { PrivatePages } from 'layouts';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'My Bank - Dashboard';
  }, []);

  return (
    <PrivatePages>
      <div className="flex w-screen h-screen">
        <SideBar />
        <Content />
      </div>
    </PrivatePages>
  );
};

export default Dashboard;
