import React from "react";


export class Welcome extends React.Component{

    //setting default value for name - conditional rendering
    render(){
        if(this.props.name){
            return <p>Hello, {this.props.name}!</p>
        } else{
            return 'Hello, User!';
        }

    }
}


