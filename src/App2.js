import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App2() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome username="Elio"/>}/>
                <Route path="counter" element={<Counter />}/>
            </Routes>
        </div>
    )
}