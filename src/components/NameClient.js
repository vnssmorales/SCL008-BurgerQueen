import React, { Component } from 'react';

class NameClient extends Component {
    render() {
        return (
            <div>
                <input type='text' />
                <button onClick={this.insertName.bind(this)}>Ingresa tu Nombre aquí:</button>
                {this.props.nameClient}
            </div>
        )
    }
}

export default NameClient;