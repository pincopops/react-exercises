import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList"


export function App2() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome username="Elio" />} />
                <Route path="counter" element={<Counter />} />
                <Route path="users/" element={<GithubUserList />}>
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<div><h1>Error 505: I've ever wanted to write that one 🤩 !</h1></div>}></Route>
            </Routes>
        </div>
    )
}