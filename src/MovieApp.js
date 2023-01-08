import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
// import Main from "./components/Main"
// import NavBar from "./components/NavBar"
import PageNotFound from './components/PageNotFound'
import Routing from './Routing'
import { Routes, Route, Redirect } from "react-router-dom";
import New from './components/New'
import NavBar from './components/NavBar'


function MovieApp() {
  return (
    <>
    <div>***********APP************</div>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/new" element={<New></New>}></Route>
      </Routes>
      
      {/* <Routing></Routing> */}
    </>
  )
}

export default MovieApp;