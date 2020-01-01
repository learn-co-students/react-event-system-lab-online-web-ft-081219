import React, { Component } from 'react'

class Keypad extends Component {
  enterPass = () => (
    console.log('Entering password...')
  )

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.enterPass}/>
      </div>
    )
  }
}

export default Keypad