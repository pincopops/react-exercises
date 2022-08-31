import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";


export function App2() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome username="Elio"/>}/>
                <Route path="counter" element={<Counter />}/>
                <Route path="users/:username" element={<ShowGithubUser />}/>
                <Route path="*" element={<div><h1>Error 505: I've ever wanted to write that one 🤩 !</h1></div>}></Route>
            </Routes>
        </div>
    )
}