import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"; 


import Login from "../pages/Auth/login.js";
import Header from "../components/header.js/index.js"
import PrivateRoute from "./PrivateRoute.js";
import { AuthProvider } from "../context/AuthContext.js";
import Home from "../pages/home/home.js";
import Register from "../pages/Auth/register.js"
import FormPost from "../pages/form_post/index.js";
import PrivateLayout from "../layout/PrivateLayout.js";
import NoticeDetails from "../pages/NoticeDetails/NoticeDetails.js";

function RoutesApp(){
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />

                    <Route path="/login" element={ <Login/> } />
                    <Route path="/register" element={ <Register /> } />

                     <Route  element={ <PrivateRoute> <PrivateLayout /> </PrivateRoute> } >
                        <Route path="/home" element={<Home />} />
                        <Route path="/form-post/" element={<FormPost />} />
                        <Route path="/form-post/:id" element={<FormPost />} />
                        <Route path="/notice-details/:id" element={<NoticeDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default RoutesApp;
