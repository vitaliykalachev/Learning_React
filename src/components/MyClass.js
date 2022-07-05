import React, {Component} from 'react';



class MyClass extends Component { 
    
    
    render() {
        return(
            <div>
            <h1> My email is: <br/> {this.props.email}</h1>
            <button onClick={this.props.myclick}>Click</button>
            </div>
        )
    }
}

export default MyClass;