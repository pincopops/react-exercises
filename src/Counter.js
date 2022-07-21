import React from "react";

export class Counter extends React.Component{

    state = {
        count: this.props.initialStateValue,
    }

    constructor(props){
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return{
                    count: state.count + this.props.incrementedBy,   
                } 
            })
        }, this.props.updateTime)
    }
    
    render(){
        return <div>
            <h1>Counter: {this.state.count}</h1>
        </div>
    }
}