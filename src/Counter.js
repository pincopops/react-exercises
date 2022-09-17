import React from "react";
import { CounterDisplay } from "./CounterDisplay";



export class Counter extends React.Component {

    state = {
        count: this.props.initialStateValue,
    }

    //no, possiamo anche omettere il costruttore
    // constructor(props){
    //     super(props)
    // }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementedBy,
                }
            })
        }, this.props.updateTime)
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}

