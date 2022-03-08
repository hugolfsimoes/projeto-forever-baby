import React from 'react';
import instagramIcon from '../../images/intagramIcon.png';
import facebookIcon from '../../images/faceIcon.png';
import youtubeIcon from '../../images/youtubeIcon.png';
import tiktokIcon from '../../images/ticktokIcon.png';
import paymentsMethods from '../../images/image 2.png';
import './style.css';
export default function Footer() {
  const menuOptions = [
    'PERFUME INFANTIL',
    'SABONETES',
    'PÓS-BANHO',
    'ASSADURAS',
    'HIDRATANTES',
    'LENÇOS UMIDECIDOS',
  ];
  return (
    <div className='container-footer'>
      <h2 >VISITE NOSSAS REDES SOCIAIS</h2>
      <div className='container-social-media'>
        <a href="https://www.instagram.com/foreverliss/" target={'_blank'} rel="noreferrer"><img className='social-media-image' src={instagramIcon} alt="Link para instagram" /></a>
        <a href="https://www.facebook.com/foreverliss" target={'_blank'} rel="noreferrer"><img className='social-media-image' src={facebookIcon} alt="Link para facebook" /></a>
        <a href="https://www.youtube.com/c/ForeverLissOficial" target={'_blank'} rel="noreferrer"><img className='social-media-image' src={youtubeIcon} alt="Links para canal do youtube" /></a>
        <a href="https://www.tiktok.com/@foreverlissprofessional" target={'_blank'} rel="noreferrer"><img className='social-media-image' src={tiktokIcon} alt="Link para tiktok" /></a>
      </div>
      <div className='container-options'>
        {menuOptions.map(option => (
          <a href='/' key={option} className='options'>{option}</a>
        ))}
      </div>
      <h2>FORMAS DE PAGAMENTO</h2>
      <img className='payment-method-image' src={paymentsMethods} alt="Formas de pagamento" />
      <div className='container-footer-end'>
        <p>2022 www.foreverliss.com.br
          Todos os direitos reservados.

          Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque sujeitos a alterações e podem variar sem aviso prévio. Em caso de divergência no valor do produto, irá prevalecer sempre o valor do carrinho de compras.
          FOREVER COMPANY COSMETICOS LTDA / www.foreverliss.com.br / Rua José Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ: 08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112</p>
      </div>
    </div >
  );
}
