import React, { Component } from 'react';

class StateBasic extends Component {
   constructor(props) {
   super(props);
   this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
      <h1 className="title">State basic</h1>
        Counter: {this.state.counter}

        <button 
          type="button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
          Add 1
        </button>

        <button 
          type="button"
          onClick={() => this._subtractOne()}
          >
          subtract 1
        </button>        

        <div className="break"></div>
      </div>
    );
  }

  _subtractOne(){
  	this.setState({ counter: this.state.counter - 1 })
  }



}


export default StateBasic;
