// import { Hello } from './Hello';
// import { Counter } from './Counter';
// import { ClickCounter } from './ClickCounter';
// import { ClickTracker } from './ClickTracker';
// import { InteractiveWelcome } from './InteractiveWelcome';
// import { Login } from './Login';
// import { UncontrolledLogin } from './UncontrolledLogin';
// import { Todolist } from './TodoList';
// import { Container } from './Container';
// import { Sum } from './Sum';
// import { GithubUser } from './GithubUser';
// import { GithubUserList } from './GithubUserList';
import { BrowserRouter, Link } from "react-router-dom";
import { App2 } from "./App2";
import { Container } from "./Container";





export function App() {

    // state = {

    // }

    // onLogin = (data) => {
    //     this.setState({
    //         username: data.username,
    //         password: data.password,
    //     })
    // }

    const linkTemplate = {
        margin: "0.5rem",
        color: "blue",
        textDecoration: "none",
    }
    return (
        <div>
            {/*
            <Container title="My Awesome Application">
                <Hello />
                <Welcome username="Elio"/>
                <Counter />
                <ClickCounter onCounterChange={(counter) => {counter === 1 ? console.log(`You've clicked ${counter} time`) : console.log(`You've clicked ${counter} times`)}}/>
                <ClickTracker />
                <InteractiveWelcome />
                <Login onLogin={this.onLogin} />
                <UncontrolledLogin />
                <Todolist render={(arr) => {
                    arr.map((item, index) => {
                      return <div><ul key={item + index}><li>{item}</li>
                            <button type="button" onClick={() => {
                                arr.splice(index, 1)
                                this.setState({
                                    items: arr,
                                    name: ""
                                })
                            }}>Remove "{item}"</button></ul></div>
                    })
                }} />
                <Sum />
                <GithubUser username="pincopops"/>
                <GithubUserList />
            </Container> */}
            <BrowserRouter>
                <Container title="My awesome app">
                    <Link to="/" style={linkTemplate}>Home</Link>
                    <Link to="counter" style={linkTemplate}>Go to Counter</Link>
                    <Link to="users" style={linkTemplate}>Check the User</Link>
                    <App2 />
                </Container>
            </BrowserRouter>
        </div>
    )
}






