import React from 'react';
import './style.css';

export default function Menu() {
  const menuOptions = [
    'PERFUME INFANTIL',
    'SABONETES',
    'PÓS-BANHO',
    'ASSADURAS',
    'HIDRATANTES',
    'LENÇOS UMIDECIDOS',
  ];
  return (
    <div className='container-menu'>
      {menuOptions.map(option => (
        <a href='/' key={option} className='option-menu'>{option}</a>
      ))}
    </div>
  );
}
