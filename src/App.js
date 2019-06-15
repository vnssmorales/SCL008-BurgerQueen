import React, { Component } from 'react';
import './App.css';

//import ComponentMenu from './components/ComponentMenu';
import Header from './components/Header'
import WaiterView from './components/WaiterView';
import Counter from './components/Counter';

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





