import React, { Component } from 'react';
import { menu } from '../menu.json';


class ComponentMenu extends Component {
    constructor() {
      super();
      this.state = {
        menu
      }
    }
  
    render() {
        const menu = this.state.menu;
            return menu.map((menus, index) => (

                <div className = "container">
                <div className= "row">
                <div className="col-md-4">
                <div className="card mt-4">
                <div className="card-header">
                <h4>{menus.title}</h4>
                </div>
                </div>
                <div className="card-body">
                <ul>
                {menus.options.map((option, index) => {
                            return <li key={`option_${index}`}>{option}</li>
                })}                      
                </ul>
                
                </div>
                </div>
                </div>
                </div>
            ));
            
    }   
}

export default ComponentMenu;