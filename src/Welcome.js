import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{

    render(){
        
        if(this.props.name === 'John' && this.props.age <65){
            return <div>
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
            </div>
        }
        else{
            return 'Hello, User!';
        }
    }
}
                




