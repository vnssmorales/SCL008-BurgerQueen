import React, { Component } from 'react';
import ButtonCounter from './ButtonCounter';


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };

        this.handleCountClick = this.handleCountClick.bind(this);
    }

    componentDidMount() { //comprobar si el componente ya cargo//
        this.setState({
            count: 1
        });
    }

    handleCountClick(e) {
        console.log('e')
     
    }

    render() {
        
        return (
            <div className= "counter">
                <h2>Counter: {this.state.count} </h2>
                <p>
                    <ButtonCounter btnCounter="+" id="add" buttonOnclick={this.handleCountClick} />
                    <ButtonCounter btnCounter="-" id="remove" buttonOnclick={this.handleCountClick} />
                    <ButtonCounter btnCounter="reset" id="reset" buttonOnclick={this.handleCountClick} />
                </p>
            </div>
        );
    }

}


export default Counter;