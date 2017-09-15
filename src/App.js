import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//hello stuff
import Hello from './components/index';
import PropsBasic from './components/propsBasic/propsBasic';
import StateBasic from './components/stateBasic/stateBasic';
import FetchBasic from './components/fetchBasic/fetchBasic';

class App extends Component {
  render() {
    return (
          <div>
            <Hello />
            <PropsBasic author="george" comment="Learning react is actually starting to be fun"/>
            <StateBasic />
            <FetchBasic />
          </div>

    );
  }
}

export default App;
