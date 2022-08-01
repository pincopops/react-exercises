import React from 'react';
import { Hello } from './Hello';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
 
export class App extends React.Component{
    render(){
        return <div>
                <Hello />
                <Welcome />
                <Counter initialStateValue={0} incrementedBy={1} updateTime={1000} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
            </div>
    }
}

