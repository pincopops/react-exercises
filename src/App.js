import React from 'react';
import { Hello } from './Hello';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { UncontrolledLogin } from './UncontrolledLogin';
import { Todolist } from './TodoList';
import { Container } from './Container';
import { Sum } from './Sum';
import { GithubUser } from './GithubUser';
import { GithubUserList } from './GithubUserList';




export class App extends React.Component {

    state = {

    }

    onLogin = (data) => {
        this.setState({
            username: data.username,
            password: data.password,
        })
    }

    render() {

        return <div>
            <Container title="My Awesome Application">
                <Hello />
                <Welcome username="Elio"/>
                <Counter />
                <ClickCounter onCounterChange={(counter) => {counter === 1 ? console.log(`You've clicked ${counter} time`) : console.log(`You've clicked ${counter} times`)}}/>
                <ClickTracker />
                <InteractiveWelcome />
                <Login onLogin={this.onLogin} />
                <UncontrolledLogin />
                <Sum />
                <GithubUser username="pincopops"/>
                <GithubUserList />
            </Container>
        </div>
    }
}

