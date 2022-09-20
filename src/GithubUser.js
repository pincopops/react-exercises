import { useEffect, useState } from "react"
import { useGithubUser } from "./custom hooks/useGithubUser"

export function GithubUser({ username }) {
    const { data, loading, error } = useGithubUser({ username });

    return (
        <div>
            <h1>This is the owner's name of the fetched Github account:</h1>
            {loading && <span>LOADING...</span>}
            {error && <span>Something went wrong: user doesn't exist</span>}
            {data && <span>{data.name}</span>}
            <h2>It was created on:</h2>
            {data && <span>{data.created_at}</span>}
        </div>
    )
}



