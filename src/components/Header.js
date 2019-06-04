import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (


            <div className="header">
                <div className="navbar">
                    <h2 className= "center">BURGER QUEEN</h2>
                    {this.props.header}
                </div>
            </div>


        );
    }

}

export default Header;