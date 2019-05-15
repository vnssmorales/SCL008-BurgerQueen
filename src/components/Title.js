import React, { Component } from 'react';

class Title extends Component {
    render() {
        return  (
            <nav className="navbar navbar-dark bg-dark">
          <a href="" className = "text-white">
          {this.props.title}
          </a>
          <button type="button" className="btn">Secondary</button>
          
        </nav>
        );
    }
}

export default Title;