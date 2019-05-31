import React, { Component } from 'react';


class Button extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.buttonOnclick();
    }

    render() {
        return  ( 
          <button type="button" className="btn" onClick= {this.handleClick}>{this.props.btn}</button>   
        );
    }
}

export default Button;