import { Component } from "react"

export class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} and I'm the {this.props.position}</h1>
    }
}
