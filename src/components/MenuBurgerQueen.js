import React, { Component } from 'react';

class MenuBurgerQueen extends Component {
    constructor() {
        super();
        this.setState = {
            title: 'Desayuno',
            options: 'Cafe americano: $5.00'
        };
        this.handleBreakfast = this.handleBreakfast.bind(this);
    }

    handleBurgerQueen(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="card">
                <form className="card-body">
                    <div className="form-order">
                        <input
                            type="text"
                            name="title"
                            className="formulario-pedido-desayuno"
                            onChange={this.handleBreakfast}
                            placeholder="Title">
                        </input>
                    </div>

                    <div className="form-order">
                        <select
                            name = "options"
                            className="formulario-pedido-desayuno"
                            onChange={this.handleBreakfast}
                        >
                            <option>Cafe americano: $5.00</option>
                            <option>Cafe con leche: $7.00</option>
                            <option>Sandwich de jamon y queso: $10.00</option>
                            <option>Jugo natural: $7.00</option>
                        </select>
                    </div>
                </form>
            </div>

        )
    }
}

export default MenuBurgerQueen;