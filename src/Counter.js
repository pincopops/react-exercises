import React from "react";

export class Counter extends React.Component{
    //definiamo lo stato di partenza del nostro componente. In questo caso, essendo un counter,
    //lo inizializzeremo a 0. Possiamo inizializzare lo state sia tramite costruttore, sia 
    //semplicemente come fatto al di sotto.

    state = {
        count: 0,
    }

    //successivamente creiamo un costruttore avente come parametro props.

    constructor(props){
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return{
                    count: state.count + 1,   
                } 
            })
        }, 1000)
    }
    
    render(){
        return <div>
            <h1>Counter: {this.state.count}</h1>
        </div>
    }
}