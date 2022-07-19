import React from "react";


export class Welcome extends React.Component{

    render(){
        if(this.props.name && this.props.age){
            return <div>
                <p>Hello, {this.props.name}!</p>
                <p>Your age is: {this.props.age}</p>

            </div>
        }
        if(!this.props.age){
            return <p>Hello, {this.props.name}!</p>
        }else{
            return 'Hello, User!';
        }
    }
}



