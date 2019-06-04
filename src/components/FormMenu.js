import React, { Component } from 'react';
import Button from './Button';

import NameClient from './NameClient';

class FormMenu extends Component {
    constructor() {
        super();
        this.setState = {
            title: 'Desayuno',
            options: 'Cafe americano: $5.00'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
       // console.log("cambiando");
        const { value, name } = e.target;
        this.setState = { 
            [name]: value 
        }
       
    }

    handleSubmit(e) {
        e.preventDefault(); //evita refrescar el formulario//
       
    }

    render() {
        return (

                <div className = "container">    
                <div className= "row">
                <div className="col-md-5">
                <div className="card mt-5">           
          
                <form className="card-body" onSubmit= {this.handleSubmit}>
                    <NameClient inputname =  {this.props.inputname} /> 
                        <select
                            name="title"
                            className="formulario-pedido-desayuno"
                            onChange={this.handleInput} >
                            <option>Desayuno</option>
                            <option>Almuerzo y Cena</option>
                        </select>
                   
                        <select
                            name = "options"
                            className="formulario-pedido-desayuno"
                            onChange={this.handleInput} >
                            <option>Cafe americano: $5.00</option>
                            <option>Cafe con leche: $7.00</option>
                            <option>Sandwich de jamon y queso: $10.00</option>
                            <option>Jugo natural: $7.00</option>
                        </select>
                </form>
                <Button btn= "Agregar al pedido" id="btn_pedido" />
            </div>
            </div>
            </div>
            </div>

        )
    }
}

export default FormMenu;
