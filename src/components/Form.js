

import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
      }
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }


    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
  
    render() {
    return (
      <div className="container">
          <input type="text" value={this.state.username} placeholder="Enter your username" className = "form-control" onChange={this.usernameHandler}/>
          <input type="password" value={this.state.password} placeholder="Enter your Password" className = "form-control" onChange={this.passwordHandler}/>
          <button className="btn btn-primary">Click me</button>
      </div>
    )
  }
}

export default Form