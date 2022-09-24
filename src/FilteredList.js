import { useMemo } from "react"

export function FilteredList() {

    const filteredList = useMemo(() => {
        const people = [
            {
                name: "Elio",
                id: 1,
                age: 25
            },
            {
                name: "Enrico",
                id: 2,
                age: 29
            },
            {
                name: "Ettore",
                id: 3,
                age: 31
            },
            {
                name: "Flavio",
                id: 4,
                age: 17
            },
        ]

        return people.filter((person) => person.age > 18)
    }, [])


    return (
        <div>
            <h1>Users older than 18:</h1>
            {filteredList.map((item) => <h3>{item.name}: {item.age}</h3>)}

        </div>
    )
}