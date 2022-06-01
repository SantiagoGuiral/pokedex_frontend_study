import React from 'react';
import articuno from '../images/articuno.png';
import moltres from '../images/moltres.png';
import zapdos from '../images/zapdos.png';
import pikachu from '../images/pikachu.png';

const Footer = () => {
  return (
    <footer className='footer'>
        <h3>OTHERS:</h3>
        <section className='pokemon-link'>
            <a className='pokemon-image-link' href='/'><img src={articuno} alt='pokemon.png'/></a>
            <a className='pokemon-image-link' href='/'><img src={moltres} alt='pokemon.png'/></a>
            <a className='pokemon-image-link' href='/'><img src={zapdos} alt='pokemon.png'/></a>
            <a className='pokemon-image-link' href='/'><img src={pikachu} alt='pokemon.png'/></a>
        </section>
    </footer>
  )
}

export default Footer;
