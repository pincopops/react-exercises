import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";


export function App2() {
    return (
        <div>
            <Routes>
                <Route index path="/" element={<Welcome username="Elio"/>}/>
                <Route path="counter" element={<Counter />}/>
                <Route path="users/:username" element={<ShowGithubUser />}/>
            </Routes>
        </div>
    )
}