import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Logo from '../../images/logo-forever-liss-baby 1.svg';
import Menu from '../Menu';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className='container-header'>
        <a href="/"><img src={Logo} alt="Logo Forever Baby"></img></a>
        <InputGroup className="mb-3 container-search">
          <FormControl
            className='input-search'
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            aria-label="Pesquisa no site"
          />
          <Button className='button-search'>
            BUSCAR
          </Button>
        </InputGroup>
        <div>
          <div className='ellipse'></div>
          <div className='ellipse cart'></div>
        </div>
      </div>
      <Menu />
    </header>
  );
}
