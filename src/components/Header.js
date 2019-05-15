import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className = "Header">
            <ul className = "header-menu">
                <li className = "li-menu"><a href= "#menu">Menú</a></li>
                <li className = "li-pedido"><a href= "#pedido">Historial</a></li>
                <li className = "li-cocina"><a href= "#cocina">Pedido</a></li>
                <li ><a className = "active" href= "historial">Cocina</a></li>
            </ul>
            {this.props.header}
            </div>
        );
    }

}

export default Header;