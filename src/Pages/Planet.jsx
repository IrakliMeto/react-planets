import React from 'react';

import './Planet.scss';
import { useLoaderData } from 'react-router-dom';

export default function Planet() {
  const data = useLoaderData();
  console.log('data:', data);

  return (
    <div className='planet'>
      <h1>{data?.name}</h1>
    </div>
  );
}
