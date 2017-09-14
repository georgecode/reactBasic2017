import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//hello stuff
import Hello from './components/index';
import StateBasic from './components/stateBasic/stateBasic';

class App extends Component {
  render() {
    return (
          <div>
            <Hello author="george" body="Stuff stuff stuff testing react"/>
            <StateBasic author="george" body="Stuff stuff stuff testing react"/>
          </div>

    );
  }
}

export default App;
