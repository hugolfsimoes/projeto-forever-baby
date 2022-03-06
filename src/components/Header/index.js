import React from 'react';
import Logo from '../../images/logo-forever-liss-baby 1.svg';
import './style.css';

export default function Header() {
  return (
    <header>
      <img src={Logo}></img>
      <div className='container-search'>
        <input type="text" placeholder='Qual o mimo de hoje para o seu anjinho?' />
        <button type='button'>BUSCAR</button>
      </div>
      <div>
        <div className='ellipse'></div>
        <div className='ellipse cart'></div>
      </div>

    </header>
  );
}
