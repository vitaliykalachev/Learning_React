import React, {Component} from "react";



class Name extends Component {
    
    constructor() {
        super()
        this.state = {
            name: "Vitaliy Kala4"
        }
    }
    
    clickedMe = () => {
        this.setState({
            // name: 'Changed Text'
            name:this.state.name === "Vitaliy Kalachev" ? "Kala4" : "Vitaliy Kalachev"
        })
    }

    render() {
        return (
            <div>

            <h1 className = "bg-black text-white text-center">{this.state.name}</h1>
            <button onClick = {this.clickedMe} className="btn btn-success">Change text</button>
            </div>
        )
    }
}

export default Name;