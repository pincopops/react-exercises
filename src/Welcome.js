import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{

    render(){
        if(this.props.name && this.props.age){
            return <div>
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
                

            </div>
        }
        if(!this.props.age){
            return <p>Hello, {this.props.name}!</p>
        }else{
            return 'Hello, User!';
        }
    }
}



