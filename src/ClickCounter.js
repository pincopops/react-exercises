import React from 'react';

//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.

export class ClickCounter extends React.Component{
    
    state = {
        count: this.props.initialStateValue,
    }

    handleCounterClick = () => {
        this.setState((state) => {
            return{
                count: state.count + this.props.incrementedBy,   
            } 
        })

    }

    render(){
        return <div>
            <button onClick={this.handleCounterClick}>Click to increment</button>
            <div>{this.state.count}</div>
        </div>
    }
}

ClickCounter.defaultProps = {
    initialStateValue: 0,
    incrementedBy: 1,

}