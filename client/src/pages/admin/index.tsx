import React from "react";
import { Container } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router";
import { NavbarAskueFeaters } from "../../features";
import { configNavAdmin } from "../../shared/config";
import AdminPanel from "./AdminPanel";
import SubPage from "./SubPage";

const AdminPanelRoute = () => {
    return (
        <>
            <NavbarAskueFeaters configData={configNavAdmin} />
            {/* <Container>
                <Outlet />
            </Container> */}
            <Routes>
                <Route path="/*" element={<AdminPanel />} />
            </Routes>
        </>
    );
};

export default AdminPanelRoute;
