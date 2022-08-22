import React from "react";

export class Login extends React.Component{

    state = {
        username: "",
        password: "",
        remember: false,
    }
    

    handleInputChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;


        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })

    }

    handleButtonClick = () => {
        this.props.onLogin(this.state);
    }

    handleResetButton = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
        })
    }
    render(){
        const myLoginButtonCss = {
            backgroundColor: this.state.password.length < 8 ? "red" : "green",
        }

        return <div>
            <h3>This is a controlled login form</h3>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChanges}></input>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanges}></input>
            <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChanges}></input>
            <button style={myLoginButtonCss} disabled={!(this.state.username && this.state.password)} onClick={this.handleButtonClick}>Login</button>
            <button onClick={this.handleResetButton}>Reset</button>
        </div>
    }
}