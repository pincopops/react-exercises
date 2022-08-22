import React from "react";


export class Todolist extends React.Component {
    state = {
        items: ["Buy Milk", "Go to the gym", "Become a Web Developer", "Call 911 now!"],
        name: "",
    }


    handleTodoInsertion = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    handleAddTodoToList = (event) => {
        event.preventDefault()

        this.setState({
            items: [...this.state.items, this.state.name]
        })

        this.setState({
            name: "",
        })
    }

    handleResetTodoList = () => {
        this.setState({
            items: [],
        })
    }

    render() {
        return <div>
            <div>{this.state.items.map((item, index) => <ul key={item + index}><li>{item}</li>
                <button type="button" onClick={() => {
                    this.state.items.splice(index, 1)
                    this.setState({
                        items: this.state.items,
                        name: ""
                    })
                }}>Remove "{item}"</button></ul>)}</div>
            <input type="text" value={this.state.name} onChange={this.handleTodoInsertion} />
            <button type="submit" onClick={this.handleAddTodoToList}>Add To-do to list</button>
            <button type="button" onClick={this.handleResetTodoList}>Clear all those stuff</button>

        </div>
    }
}





