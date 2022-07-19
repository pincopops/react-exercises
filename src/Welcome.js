import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{

    render(){
        if(this.props.name && this.props.age > 18 && this.props.age <65){
            return <div>
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
                

            </div>
        }
        if(this.props.age <= 18){
            return <p>Hello, {this.props.name}!</p>
        }
        else{
            return 'Hello, User!';
        }
    }
}



