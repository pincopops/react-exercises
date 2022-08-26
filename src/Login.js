import React from "react";
import { useState } from "react";


export function Login (){
    const [data, setData] = useState({
        username:"",
        password:"",
        remember: false,
    })
    
    function handleInputChange(event) {
        const {name, type, value, checked} = event.target

        setData((data) => {
            return {
                ...data, 
                [name]: type === "checkbox" ? checked : value

            }
        })
    }

    function handleLoginButton() {
        console.log(data)
    }

    function handleResetButton(){
        setData({
            username:"",
            password:"",
            remember:false, 
        })
    }
    
    
    const myLoginButtonCss = {
        backgroundColor: data.password.length < 8 ? "red" : "green",
    }

    return (
    <div>
        <h3>This is a Function Component login form</h3>
        <input onChange={handleInputChange} type="text" name="username" value={data.username}></input>
        <input onChange={handleInputChange} type="password" name="password" value={data.password}></input>
        <input onChange={handleInputChange} type="checkbox" name="remember" checked={data.remember}></input>
        <button style={myLoginButtonCss} disabled={!(data.username && data.password)} onClick={handleLoginButton}>Login</button>
        <button onClick={handleResetButton}>Reset</button>

    </div>)
}

// export class Login extends React.Component{

//     state = {
//         username: "",
//         password: "",
//         remember: false,
//     }
    

//     handleInputChanges = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         const type = event.target.type;
//         const checked = event.target.checked;


//         this.setState({
//             [name]: type === "checkbox" ? checked : value,
//         })

//     }

//     handleButtonClick = () => {
//         this.props.onLogin(this.state);
//     }

//     handleResetButton = () => {
//         this.setState({
//             username: "",
//             password: "",
//             remember: false,
//         })
//     }
//     render(){
//         const myLoginButtonCss = {
//             backgroundColor: this.state.password.length < 8 ? "red" : "green",
//         }

//         return <div>
//             <h3>This is a controlled login form</h3>
//             <input type="text" name="username" value={this.state.username} onChange={this.handleInputChanges}></input>
//             <input type="password" name="password" value={this.state.password} onChange={this.handleInputChanges}></input>
//             <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChanges}></input>
//             <button style={myLoginButtonCss} disabled={!(this.state.username && this.state.password)} onClick={this.handleButtonClick}>Login</button>
//             <button onClick={this.handleResetButton}>Reset</button>
//         </div>
//     }
// }