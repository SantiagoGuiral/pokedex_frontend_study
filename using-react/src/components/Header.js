import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo_pokedex'/>
      <h1>PokeDEX_</h1>
    </header>
  )
}

export default Header;
