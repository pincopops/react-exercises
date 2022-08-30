import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App2() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome username="Elio"/>}/>
            </Routes>
        </div>
    )
}