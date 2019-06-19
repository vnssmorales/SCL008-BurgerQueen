import React, { Component } from 'react';
import {connect} from 'react-redux'; //unir react y redux 
import {clientName} from '../redux/actions/client'

class NameClient extends Component {
    constructor(props) {
        super(props);
        this.handleClient = this.handleClient.bind(this);
    }

    handleClient(e) {
        e.preventDefault();
        this.props.turnClient(this.getName.value)
    }

    render() {
        return (
            <div className = "inputname">
                <form onSubmit = {this.handleClient}>
                <div className= "form-group">
                <input type = "text" onChange = {this.props.onChange} className = "form-control" 
                       name = "clientName" 
                       ref= {(input) => this.getName = input} />
               </div>
                <input type = "submit" className = "enter" value = "Ingresar"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        turnClient: clientName(dispatch),
    }
}

export default connect(
    mapStateToProps,
    //recuperar estado
    mapDispatchToProps
    // enviar acciones
)
(NameClient);