import React, { Component } from 'react';
import './App.css';

//import ComponentMenu from './components/ComponentMenu';
import Header from './components/Header'
import FormMenu from './components/FormMenu';
import ComponentMenu from './components/ComponentMenu'
import ContenidoMenu from './components/ContenidoMenu';
import ProductBreakfast from './components/ProductBreakfast';

class App extends Component {

  render() {

    return (
      <div>

       <Header />
       <ComponentMenu />
   
        <FormMenu onAddOrder = "pedido" />    
       
      </div>
        
    );
  }

  
}

export default App;





