import React from 'react';
import MyNavBar from "./components/MyNavBar";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Layout;