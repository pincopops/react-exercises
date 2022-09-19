import React from "react";
import { useCounter } from "./custom hooks/useCounter";

export function Counter ({initialValue = 0}){
  const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

  return (
      <div>
          <h1>Endless Counter: {counter}</h1>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onReset}>Reset</button>
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