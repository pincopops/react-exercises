import { useState } from "react";

export function useForm() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

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

    function handleResetButton() {
        setData({
            username: "",
            password: "",
            remember: false,
        })
    }

    return {
        username: data.username,
        password: data.password,
        remember: data.remember, 
        inputChange: handleInputChange, 
        loginButton: handleLoginButton, 
        resetButton: handleResetButton
    }
}