import { useState } from "react";

export function ClickCounter ({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)
    
    function handleCounterClick(){
        setCounter((counter) => counter + 1)
    }
    return <div>
        <button onClick={handleCounterClick}>Click to increment</button>
        <span style={{backgroundColor: "red", color: "white", borderRadius: "2rem"}}><strong>{counter}</strong></span>
    </div>
}
// export class ClickCounter extends React.Component{
    
//     state = {
//         count: this.props.initialStateValue,
//     }

//     handleCounterClick = () => {
//         this.setState((state) => {
//             return{
//                 count: state.count + this.props.incrementedBy,   
//             } 
//         })

//     }

//     render(){
//         return <div>
//             <button onClick={this.handleCounterClick}>Click to increment</button>
//             <div>{this.state.count}</div>
//         </div>
//     }
// }

// ClickCounter.defaultProps = {
//     initialStateValue: 0,
//     incrementedBy: 1,

// }