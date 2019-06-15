import React, { Component } from 'react';
import Button from './Button';
import MenuBreakfast from './MenuBreakfast';
import MenuLunchAndDinner from './MenuLunchAndDinner';

class WaiterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBreakfast: false,
            showOthers: false,
        }

        this.showBreakfast = this.showBreakfast.bind(this);
        this.showOthers = this.showOthers.bind(this);
    }

    showBreakfast() {
        this.setState({
            ...this.state,
            showBreakfast: true,
            showOthers: false
        })
    }

    showOthers() {
        this.setState({
            ...this.state,
            showBreakfast: false,
            showOthers: true
        })
    }

    render() {

        return (

                        <div className="menu-container">
                            <Button btnName="Desayuno" id="btnDesayuno" buttonOnclick={this.showBreakfast} />
                            <Button btnName="Resto del día" id="btnAlmuerzo" buttonOnclick={this.showOthers} />

                            <div id="containerOptions">
                                {
                                    this.state.showBreakfast &&
                                    <MenuBreakfast />
                                }
                                {
                                    this.state.showOthers &&
                                    <MenuLunchAndDinner />
                                }
                            </div>
                        </div>
            
        );
    }
}

export default WaiterView;

