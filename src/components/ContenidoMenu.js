import React, { Component } from 'react';

import Button from './Button';



class ContenidoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {menuBurger: true};

    this.handleBreakfast = this.handleBreakfast.bind(this);
  }

  handleBreakfast() {
    this.setState(state => ({
      menuBurger: !state.menuBurger
    }));
  }

  render() {
    return (
     
      <div className= "container_menu">
      <div className="row">
      <div className="col-sm" id= "pedido">
      <Button btn= "Desayuno" buttonOnClick={e => this.menuBurger('Desayuno', e)}/>
      <Button btn= "Resto del día" />
      
      </div>
      </div>
      </div> 
    );
  }
}

export default ContenidoMenu;