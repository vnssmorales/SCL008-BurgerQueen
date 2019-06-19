import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import WaiterView from './components/WaiterView';


class App extends Component {

  render() {

    return (
      <div>
       <Header />
       <WaiterView />  
           
      </div>
        
    );
  }
  
}

export default App;





