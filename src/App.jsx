import React from "react";
import "./App.css";
import Reviews from "./Components/Reviews";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Productlist from "./Pages/Productlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route element={<PrivateRoute />}>
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/cart" element={<Cart /> } />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
