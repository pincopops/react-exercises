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

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        return <div>
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChanges}></input>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanges}></input>
            <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChanges}></input>
        </div>
    }
}