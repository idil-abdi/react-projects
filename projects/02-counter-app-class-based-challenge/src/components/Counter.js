import { Component } from "react";

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 }
    }

    handelIncrement = () => {
        this.setState({ counter: this.state.counter + 1 })
    };

    handelReset = () => {
        this.setState( {counter: 0} )
    };

    handelDecrement = () => {
        this.setState({ counter: this.state.counter > 1 ? this.state.counter -1 : 0 })
    };

    render() {
        return (
            <div className="card m-2 p-4">
                <h3 className="text-center">Counter: {this.state.counter}</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.handelIncrement} type="button" className="btn btn-primary">+</button>
                    <button onClick={this.handelReset} type="button" className="btn btn-primary">Reset</button>
                    <button onClick={this.handelDecrement} type="button" className="btn btn-primary">-</button>
                </div>
            </div>
        )
    }
}