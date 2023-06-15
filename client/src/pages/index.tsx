import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import React, { startTransition } from "react";
//import Simple from "./simple";
//import Auth from "./auth";
import NoAccess from "./noAccess";
import { CheckAuthAndRole } from "../widgets";
import { EnRole } from "../shared/config/enumRole";
import Layout from "./layout";
import { LoadingSpin } from "../entities";
import { LoadingVariant } from "../shared/config";

const SimplePage = lazy(() => import("./simple"));
const Auth = lazy(() => import("./auth"));
const AdminPanelRoute = lazy(() => import("./admin"));
const AdminPanel = lazy(() => import("./admin/AdminPanel"));

interface ICustomMainRoute {
    path: string;
    roles: EnRole[];
    elementReact: React.ReactElement;
    children: React.ReactElement;
}

export const Routing = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <CheckAuthAndRole role={[EnRole.ADMIN, EnRole.USER]}>
                        <Layout />
                    </CheckAuthAndRole>
                }
            >
                <Route
                    path="/"
                    element={
                        <Suspense
                            fallback={
                                <LoadingSpin
                                    variant={LoadingVariant.SECONDARY}
                                />
                            }
                        >
                            <SimplePage />
                        </Suspense>
                    }
                />
            </Route>
            <Route
                path="/admin/*"
                element={
                    <CheckAuthAndRole role={[EnRole.ADMIN, EnRole.USER]}>
                        <AdminPanelRoute />
                    </CheckAuthAndRole>
                }
            />
            <Route
                path="/login"
                element={
                    <Suspense
                        fallback={
                            <LoadingSpin variant={LoadingVariant.SECONDARY} />
                        }
                    >
                        <Auth />
                    </Suspense>
                }
            />
            <Route path="/no_access" element={<NoAccess />} />
            <Route path="*" element={<NoAccess />} />
        </Routes>
    );
};
