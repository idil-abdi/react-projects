import { Component } from "react";

/* learning state using Class Components. */
export class Messages extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitors'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
            
        )
    }
}

