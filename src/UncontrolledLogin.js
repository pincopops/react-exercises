import React from "react";


export class UncontrolledLogin extends React.Component {


    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;
        const loginButton = event.target.elements.loginButton;
        const resetButton = event.target.elements.resetButton;

        console.log({
            username,
            password,
            remember,
            loginButton,
            resetButton,
        })
    }

    componentDidMount = () => {
        this.usernameInput.focus();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h3>This is an uncontrolled login form</h3>
                    <input ref={(usernameInput) => {this.usernameInput = usernameInput}} type="text" name="username"></input>
                    <input type="password" name="password"></input>
                    <input type="checkbox" name="remember" ></input>
                    <button type="submit" name="loginButton">Login</button>
                    <button type="reset" name="resetButton">Reset</button>
                </form>
            </div>
        )
    }
}




