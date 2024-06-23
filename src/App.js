import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Room from "./components/room/Room";
import {React} from "react";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Reservation from "./components/reservation/Reservation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/room" element={<Home />} />
                    <Route path="/reservation" element={<Reservation />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;