import React from "react";

export function Sum ({n=[10,20,30]}){
    
    return <div>
        <h1>{n.reduce((n1,n2) => n1 + n2)}</h1>

    </div>
}