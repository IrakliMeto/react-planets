import React from 'react';
import Header from './Layout/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <Header />
      <div>
        ' outlet ' :
        <Outlet />
      </div>
    </div>
  );
}
