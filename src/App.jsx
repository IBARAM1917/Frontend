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
import Read from "./Components/Read";
import Create from "./Components/Create";
import { UserProvider } from "./Provider/UserProvider";
 

const App = () => {
 


  return (
    <BrowserRouter>
   <UserProvider> 
     <Header />
      <Routes>  
       <Route element={<PrivateRoute />} >
       <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/admindashboard" element={<AdminDashboard />} />
     <Route path="/data/:id" element={<Read />} />
     <Route path="/create" element={<Create />} />
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
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
