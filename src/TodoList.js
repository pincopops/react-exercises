import React from "react";



export class Todolist extends React.Component {

    state ={
        items: ["Buy Milk", "Go to the gym", "Become a Web Developer", "Call 911 now!"],
        name: ""
        }
        
        handleTodoInsertion = (event) =>{
            this.setState ({
                name: event.target.value
            })
            
        }
    
        handleAddTodoToList = (event) =>{
            event.preventDefault() 
    
            this.setState({
                items: [...this.state.items, this.state.name]
            })
        }
    
        render(){
            
            return <div>
            <div>{this.state.items.map((string, index) => <ul key={string + index}><li>{string}</li></ul>)}</div>
            <input type="text" value={this.state.name} onChange={this.handleTodoInsertion}/>
            <button type="submit" onClick={this.handleAddTodoToList}>Add To-do to list</button>
            </div>
        }
}


