import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import login from "../pages/Login";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = React.useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
        <Routes>
            {privateRoutes.map(route => {
                return (
                    <Route element={<route.element />} path={route.path} key={route.path}/>
                )})}
            <Route path="*" element={<Error/>} />
        </Routes>
            :
            <Routes>
                {publicRoutes.map(route => {
                    return (
                        <Route element={<route.element />} path={route.path} key={route.path}/>
                    )})}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;