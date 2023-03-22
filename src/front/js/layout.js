import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { ToDo } from "./pages/todos.jsx";

import StarWars from "./pages/starWars.jsx";
import SinglePeople from "./component/singlePeople.jsx";

import Planets from "./pages/Planets.jsx";
import SinglePlanets from "./component/singlePlanets.jsx";

import Vehicles from "./pages/Vehicles.jsx";
import SingleVehicles from "./component/singleVehicles.jsx";


import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                     
                        <Route element={<StarWars />} path="/" />
                        <Route element={<Demo />} path="/demo" />

                        <Route element={<h1>EStoy en la vista de 4Geeks</h1>} path="/4geeks" />
                        <Route element={<Single />} path="/single/:thetitle" />
                        <Route element={<SinglePeople />} path="/people/:uid" />

                        <Route element={<Single />} path="/single/:thetitle" />
                        <Route element={<SinglePlanets />} path="/planets/:uid" />

                        <Route element={<Single />} path="/single/:thetitle" />
                        <Route element={<SingleVehicles />} path="/vehicles/:uid" />



                        <Route element={<h1>Not found! 404</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
