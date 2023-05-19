import React from 'react';

import './Planet.scss';
import { useLoaderData } from 'react-router-dom';

export default function Planet() {
  const data = useLoaderData();
  console.log('data:', data);

  return (
    <div className='planet'>
      <h1>{data?.name}</h1>

      <div className='about'>
        <p className='text'>{data?.climate}</p>
        <p className='text'>{data?.diameter}</p>
        <p className='text'>{data?.orbital_period}</p>
        <p className='text'>{data?.terrain}</p>
      </div>
    </div>
  );
}
