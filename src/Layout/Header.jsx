import React from 'react';
import { Link } from 'react-router-dom';
import { routItems } from '../App';

import './Header.scss';

export default function Header() {
  return (
    <header className='header'>
      <Link to='/react-planets'>
        <h1>The Planets</h1>
      </Link>

      <nav className='navigation'>
        {routItems.map((item) => (
          <Link key={item.id} to={item.name}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
