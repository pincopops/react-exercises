import { useEffect, useState } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                setData(json)
            })
    }, [username])


    return (
        <div>
            <h1>This is the owner's name of the fetched Github account:</h1>
            {data && <span>{data.name}</span>}
            <h2>It was created on:</h2>
            {data && <span>{data.created_at}</span>}
            
        </div>
    )
}

