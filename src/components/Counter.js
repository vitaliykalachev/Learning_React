

import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    clickMeplus = () => {
        this.setState({
            count:this.state.count +1
        })
    }

    clickMeMinus = () => {
        this.setState({
            count:this.state.count -1
        })
    }


  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        
        <button onClick = {this.clickMeplus} className="btn btn-success">+</button>
        <button onClick = {this.clickMeMinus} className="btn btn-success">-</button>
        
      </div>
    )
  }
}

export default Counter