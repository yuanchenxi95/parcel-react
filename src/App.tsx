import React, { Component } from 'react';
import logo from './logo.svg';
import uniq from 'lodash-es/uniq';
import './App.css';

import { hi } from 'src/utils/hello';

async function hello() {
  console.log('hello');
  hi()
  return 1;
}

class App extends Component {
  render() {
    hello()
    console.log(uniq([1,3,4,1,3,4,2]));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
