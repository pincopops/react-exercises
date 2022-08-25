import React from "react";

export function Sum (props){
    
    return <div>
        <h1>{props.n.reduce((n1, n2) => n1 + n2 )}</h1>

    </div>
}