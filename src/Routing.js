import React from 'react';
import { Routes, Route, Redirect } from "react-router-dom";

function Home() {
    return (
        <div>Home</div>
    )
}
function Login() {
    return (
        <div>Login</div>
    )
}
function PageNotFound() {
    return (
        <div>404 page not found</div>
    )
}

function Routing() {
    return (
        <>
            <div className='border-b-2 mb-4'>
                <button className='bg blue-500 mr-4'>Login</button>
                <button className='bg blue-500 mr-4'>Home</button>
            </div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
            
        </>

    )
}

export default Routing;
