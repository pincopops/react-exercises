import React from "react";
import { Age } from "./Age";

export function Welcome ({username = "world"}, {age = 25}){

    return <div className="welcome">
                 <p>Hello, {username}!</p>
                 <Age age= {age}/>           
            </div>
}

// export class Welcome extends React.Component{

//     render(){
        
//          //if(this.props.name === 'John' && this.props.age <65){
//             return <div className="welcome">
//                 <p>Hello, {this.props.username}!</p>
//                 <Age age={this.props.age}/>
//             </div>
//         // }
//         // else{
//         //     return 'Hello, User!';
//         // }
//     }
// }
                




