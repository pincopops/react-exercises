import { useEffect, useState } from "react"

export function useGithubUser({ username }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const useEffectConst = useEffect(() => {
        setLoading(true)
        setError(null)
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(new Error("User doesn't exist."))
                } else return response.json()
            })
            .then((json) => {
                console.log(json)
                setLoading(false)
                setData(json)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [username])

    return {
        data: data,
        loading: loading,
        error: error,
        useEffect: useEffectConst,
    }
}