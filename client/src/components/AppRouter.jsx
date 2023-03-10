import React from 'react';
import { redirect } from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import OneOrderPage from "../pages/OneOrderPage";
import Auth from "../pages/Auth";
import Layout from "../Layout";

const AppRouter = () => {
    const isAuth = true
    //const role =[admin, dev, manager, master, drive]

    return (
        <Routes>
            {
                isAuth ?


                    <Route path="/"  element={< Layout />}>
                        <Route index path="/" element={< HomePage />}/>
                        <Route path="/:id" element={<OneOrderPage />}/>

                        <Route path="/newform">

                        </Route>
                        <Route path="/allorders">

                        </Route>
                        <Route path="/catalog">

                        </Route>
                        <Route path="/warehouse">

                        </Route>

                    </Route>




                    :
                    <Route>
                        <Route path="/" element={< Auth /> }/>
                    </Route>
            }
        </Routes>

    );
};

export default AppRouter;