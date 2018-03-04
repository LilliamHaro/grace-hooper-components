import React, { Component } from 'react';
// importando css del componenete
import './Header.css';

// Notas:
// no permite comentarios dentro del componente
// las etiquetas deben cerrarse incluso hr

class Header extends Component {
  render() {
    return (
      <header>
      <h1 className="size-title" >Grace Murray Hopper</h1>
      <hr></hr>
      </header>
  );
 }
}
export default Header;
