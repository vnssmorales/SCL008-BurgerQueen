import React, { Component } from 'react';
import './App.css';

//import ComponentMenu from './components/ComponentMenu';
import Header from './components/Header'
import Menu from './components/Menu';

import Counter from './components/Counter';

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





