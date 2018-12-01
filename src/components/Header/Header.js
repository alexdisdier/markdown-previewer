import React, { Component } from 'react';

import logo from './white-dot.svg';
import './Header.scss';

class Header extends Component {

  displayTests(){
    var unitTest = document.querySelector('#fcc_test_suite_wrapper');

    if (unitTest.style.display === 'block'){
      unitTest.style.display = 'none';
    } else {
      unitTest.style.display = 'block';
    }
  }

  render(){

    return (
      <header>
        <div className="title">
          <img src='{logo}' className="App-logo" alt="logo" />
          <h1>Markdown previewer for github</h1>
        </div>
        <div className="checkbox">
          <button onClick={this.displayTests}>Toggle FreeCodeCamp Test Suite</button>
        </div>
      </header>
    )
  }
}

export default Header;
