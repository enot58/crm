import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import OneOrderPage from "../pages/OneOrderPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"  element={< OneOrderPage />}/>
        </Routes>
    );
};

export default AppRouter;