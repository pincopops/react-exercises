import React from 'react';

//Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.

export class ClickTracker extends React.Component{
    
    state = {
        button: "No button was pressed"
    }

    
    handleClickTracker = (event) => {
        this.setState({
            button: event.target.name
        })
    }

    render(){
        return <div>
            <button name="Button 1" onClick={this.handleClickTracker}>Button 1</button>
            <button name="Button 2" onClick={this.handleClickTracker}>Button 2</button>
            <button name="Button 3" onClick={this.handleClickTracker}>Button 3</button>
            <h1>Last button you've pressed is: {this.state.button}</h1>
        </div>
    }

}