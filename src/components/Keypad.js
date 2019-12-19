import React, { Component } from 'react';


export default class Keypad extends Component {

  handleKeyPress = e => {
    console.log('Entering password...');
  }
  render() {
    return (
      <div><input onKeyUp={this.handleKeyPress} type="password" /></div>
    );
  }

}
