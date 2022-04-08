import React from "react";
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import { Home } from "./pages/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
            </Routes>        
        </BrowserRouter>
      );
}

export {Router};