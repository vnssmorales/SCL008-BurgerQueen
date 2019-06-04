import React, { Component } from 'react';
import './App.css';

//import ComponentMenu from './components/ComponentMenu';
import Header from './components/Header'
import FormMenu from './components/FormMenu';
import ComponentMenu from './components/ComponentMenu'
import ContenidoMenu from './components/ContenidoMenu';
import Menu from './components/Menu';


class App extends Component {

  render() {

    return (
      <div>
       <Header />
       <Menu />  
       
      </div>
        
    );
  }
  
}

export default App;





