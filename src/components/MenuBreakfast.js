import React, { Component } from 'react';

class MenuBreakfast extends Component {
    constructor() {
        super();
        this.state = {
            title: 'desayuno'
        };
    }

    handleBreakfast(e) {
        const { value, seleccion } = e.target;
        this.setState({
            [seleccion]: value
        })

    }

    render () {
        return (
            <div className = "card">
            <form className = "card-body">
            <div className = "formulario-pedido-desayuno">
            </div>
            </form>
           
        
    <div className = "options-breakfast">
    <select
      seleccion = "breakfast"
      className = "formulario-pedido-desayuno"
      onChange = {this.handleBreakfast}
      >
      <option>Cafe americano: $5.00</option>
      <option>Cafe con leche: $7.00</option>
      <option>Sandwich de jamon y queso: $10.00</option>
      <option>Jugo natural: $7.00</option>
      </select>
    
      </div>
    </div>

)
}
}

export default MenuBreakfast;