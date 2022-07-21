import React from 'react';
import { Hello } from './Hello';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
 
export class App extends React.Component{
    render(){
        return <div>
                <Hello />
                <Welcome name='John' age='25' />
                <Counter initialStateValue={0} incrementedBy={1} updateTime={1000} />
            </div>
    }
}

