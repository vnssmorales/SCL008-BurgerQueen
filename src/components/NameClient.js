import React, { Component } from 'react';

class NameClient extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Bienvenido a BurgerQueen: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className = "inputname">
                <form onSubmit = {this.handleSubmit}>
                <label>
                <input type ="text" placeholder= "¿Tu nombre es?" value = {this.state.value} onChange={this.handleChange}/>
                </label>
                <input type = "submit" className = "enter" value = "Ingresar"/>
                </form>
                {this.props.inputname}
            </div>
        );
    }
}

export default NameClient;