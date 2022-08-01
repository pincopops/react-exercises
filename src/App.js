import React from 'react';
import { Hello } from './Hello';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';

 
export class App extends React.Component{

    state = {

    }

    onLogin = (data) => {
        this.setState({
            username: data.username,
            password: data.password,
        })
    }

    render(){
        return <div>
                <Hello />
                <Welcome />
                <Counter initialStateValue={0} incrementedBy={1} updateTime={1000} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login onLogin={this.onLogin}/>
            </div>
    }
}
