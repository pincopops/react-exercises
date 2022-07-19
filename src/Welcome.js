import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{
//soluzione dell'esercizio conditional-rendering-02 già implementata nei
//branch precedenti. Age non viene mostrato se non passato come prop o se
//non corrispondente a maggiore di 18.
    render(){
        if(this.props.name && this.props.age > 18){
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



