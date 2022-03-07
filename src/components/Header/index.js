import React from 'react';
import Logo from '../../images/logo-forever-liss-baby 1.svg';
import Menu from '../Menu';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className='container-header'>
        <img src={Logo} alt="Logo Forever Baby"></img>
        <div className='container-search'>
          <input type="text" placeholder='Qual o mimo de hoje para o seu anjinho?' />
          <button type='button'>BUSCAR</button>
        </div>
        <div>
          <div className='ellipse'></div>
          <div className='ellipse cart'></div>
        </div>
      </div>
      <Menu />
    </header>
  );
}
