import React, { useEffect, useState } from 'react';
import { products } from '../../data/data';
import ItemCard from '../ItemCard';
import './styles.css';

export default function BoardProducts() {

  useEffect(() => {

  }, []);

  return (
    <div className='container-board-products'>
      <p className='title-board'>FOREVER BABY DESTAQUES</p>
      <div className='container-products'>
        {products.map(product => <ItemCard product={product} />)}
      </div>
    </div>
  );
}
