import React, { Component } from 'react';


class ButtonCounter extends Component {
    constructor(props) {
        super(props);
        this.handleCountClick = this.handleCountClick.bind(this);
    }

    handleCountClick() {
        this.props.buttonOnclick();
    }

    render() {
        return  ( 
          <button type="button"  onClick= {this.handleCountClick}>{this.props.btnCounter}</button>
        );
    }
}

export default ButtonCounter;