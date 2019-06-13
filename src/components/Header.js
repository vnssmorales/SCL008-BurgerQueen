import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <div className="header">
                
                    <h2 className= "left">BURGER QUEEN</h2>
                    {this.props.header}
                
            </div>


        );
    }

}

export default Header;