import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useState, useEffect } from "react";

export function Counter (){
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(counter + 1);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    });

    return (
        <div>
            <h1>Endless Counter: {counter}</h1>
        </div>
    )
}
// export class Counter extends React.Component{

//     state = {
//         count: this.props.initialStateValue,
//     }
    
     //no, possiamo anche omettere il costruttore
     // constructor(props){
     //     super(props)
     // }

//     componentDidMount(){
//         setInterval(() => {
//             this.setState((state) => {
//                 return{
//                     count: state.count + this.props.incrementedBy,   
//                 } 
//             })
//         }, this.props.updateTime)
//     }
    
//     render(){
//         return <div>
//             <CounterDisplay count={this.state.count}/>
//         </div>
//     }
    
// }