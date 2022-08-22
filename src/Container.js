import React from "react";

export class Container extends React.Component{
    render(){
        //regole css per il componente
        const containerCss = {
            backgroundColor: "white",
            border: "5px solid red",
        }

        return <div style={containerCss}>
            {this.props.children}
        </div>
    }
}