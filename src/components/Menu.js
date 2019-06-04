import React, { Component } from 'react';
import Button from './Button';

class Menu extends Component {
    constructor() {
        super();
    }
    render() {
        return(
    <div className= "menu-container">
      <Button btn= "Desayuno" buttonOnClick={e => this.menuBurger('Desayuno', e)}/>
      <Button btn= "Resto del día" />
      </div>
        );
    }
}

export default Menu;

