import React, { createContext, useState } from "react";
import "./App.css";
import Reviews from "./Components/Reviews";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import AdminDashboard from "./Components/AdminDashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
 

const App = () => {
 


  return (
    <BrowserRouter>
   
     <Header />
      <Routes>  
       <Route element={<PrivateRoute />} >
       <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/admindashboard" element={<AdminDashboard />} />
     </Route>
     </Routes>
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/review" element={<Reviews />} />
         
          </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
