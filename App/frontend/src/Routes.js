import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ModifyUser from "./pages/ModifyUser";
import GameSelect from "./pages/Game/GameSelect";
import Support from "./pages/Game/Support";
import Help from "./pages/Game/Help";
import Profile from "./pages/Game/Profile";
import DifficultGameView from "./pages/Game/DifficultGameView";
import EasyGame from "./pages/Game/EasyGame";
import DifficultGame from "./pages/Game/DifficultGame";

export default function RouteProvider(){
    return(
        <Routes>
            <Route path="*" exact element={<WelcomeScreen />} />
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/ModifyUser" element={<ModifyUser />} />
            <Route path="/Game">
                <Route path="/Game/:game" element={<GameSelect />} />
                <Route path="/Game/Support" element={<Support />} />
                <Route path="/Game/Help" element={<Help />} />
                <Route path="/Game/Profile" element={<Profile />} />
                <Route path="/Game/EasyGame" element={<EasyGame />} />
                <Route path="/Game/DifficultGame" element={<DifficultGame />} />
            </Route>
        </Routes>
    );
};