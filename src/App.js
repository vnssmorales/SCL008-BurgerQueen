import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Products from './components/Products'
import MenuBreakfast from './components/MenuBreakfast'
import { menu } from './menu.json';
console.log(menu);


class App extends Component {
  constructor() {
    super();
    this.state = {
      menu
    }
  }



  render() {

    const menu = this.state.menu.map((menus, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h4> {menus.title} </h4>
              
            </div>
            <div className="card-body">
            
            <ul>
                {menus.options.map(option => {
                  return <li key={`option_${option}`}>{option}</li>
                })}
            </ul>

            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">

      <Products tittle = "Menu" />
        
        <div className="container">
          <div className = "row mt-4">

          </div>

        </div>
        {menu}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BURGERQUEEN
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </div>
    );
  }

}

export default App;
