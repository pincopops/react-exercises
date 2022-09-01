import { useState } from "react"
import { Link } from "react-router-dom"

export function GithubUserList() {
    const [array, setArray] = useState([])


    const handleClickTest = () => {
        console.log(array)
    }



    const handleInputFieldChange = () => {
        let inputFieldVal = document.querySelector(".username").value;
        let inputField = document.querySelector(".username");

        setArray(array => [...array, inputFieldVal])

        inputField.value = "";
    }

    
    return (
        <div>
            <input style={{ marginTop: "5rem", }} type="text" className="username" placeholder="insert Github username" name="username"></input>
            <button type="button" onClick={handleInputFieldChange}>Show User</button>
            <button type="button" onClick={handleClickTest}>Array content log test</button>
            <div>
                <h1>Fetched users:</h1>
                <div>
                    {/* {array && array.map((item, index) => {
                        return (<GithubUser key={item + index} username={item} />)
                    })} */}
                     {array && array.map((username, index) => {
                        return (<Link to={`${username}`} key={username + index}>GithubUser: {username}</Link>)
                    })}
                </div>
            </div>
        </div>
    )
}







