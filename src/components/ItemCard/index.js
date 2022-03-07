import React from 'react';
import starImage from '../../images/Star 7.png';
import './style.css';

export default function ItemCard({ product: { image, title, price } }) {
  return (
    <div className='container-item-card'>
      <img className='item-image' src={image} alt={`${title}`} />
      <div className='container-item-info'>
        <p className='item-title'>{title}</p>
        <p className='item-price'>{`R$ ${price}`}</p>
      </div>
      <div className='container-star'>
        <img className='star' src={starImage} alt="Avaliação muito ruim" />
        <img className='star' src={starImage} alt="Avaliação ruim" />
        <img className='star' src={starImage} alt="Avaliação média" />
        <img className='star' src={starImage} alt="Avaliação boa" />
        <img className='star' src={starImage} alt="Avaliação muito boa" />
      </div>
      <div className='container-add-item'>
        <p>ADICIONAR AO CARRINHO</p>
      </div>
    </div>
  );
}
