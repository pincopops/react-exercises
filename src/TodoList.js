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
            items: [...this.state.items, this.state.name],
            name: ""
        })
    }

    handleResetTodoList = () => {
        this.setState({
            items: [],
        })
    }

    deleteItem = (arr, index) => {
        arr.splice(index, 1)
        this.setState({
            items: arr,
            name: ""
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleTodoInsertion} />
                <button type="submit" onClick={this.handleAddTodoToList}>Add To-do to list</button>
                <button type="button" onClick={this.handleResetTodoList}>Clear all those stuff</button>

                {/* così facendo stiamo dicendo al componente di portare al di fuori le proprie informazioni
            e divulgarle ad App.js, il quale riuscirà a controllarlo tramite la props "render" */}
                {this.props.render(this.state.items, this.deleteItem)}

            </div>
        )
    }
}





