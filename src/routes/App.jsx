import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css"
import { Layout } from "../container/Layout";
import { Home } from "../pages/Home"
import { Login } from "../container/Login";
import { PasswordRecovery } from "../container/PasswordRecovery";
import { NotFound } from "../pages/NotFound"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-recovery" element={<PasswordRecovery />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;