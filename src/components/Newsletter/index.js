import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './style.css';

export default function Newsletter() {
  return (
    <div className='container-newsletter'>
      <h2 className='tile-newsletter'>NEWSLETTER FOREVER BABY</h2>
      <p className='text-newsletter'>Cadastre-se agora para não perder nenhuma promoção</p>
      <InputGroup className="mb-3 container-register">
        <FormControl
          className='input-register'
          placeholder="Digite aqui o seu melhor e-mail"
          aria-label="Cadastro"
        />
        <Button className='button-register'>
          CADASTRAR
        </Button>
      </InputGroup>
    </div>
  );
}
