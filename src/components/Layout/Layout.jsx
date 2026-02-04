import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    const location = useLocation();
    const isAuthPage = ["/login", "/signup"].includes(location.pathname);

    return (
        <>
            {!isAuthPage && <Navbar />}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <div style={{ paddingTop: isAuthPage ? "0px" : "70px", minHeight: "80vh" }}>
                <Outlet />
            </div>
            {!isAuthPage && <Footer />}
        </>
    );
};


export default Layout;
