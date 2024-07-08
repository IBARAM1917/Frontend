import React from 'react';
import './App.css'
import Reviews from './Components/Reviews';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Productlist from './Pages/Productlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import { useSelector } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';


const App = ({children}) => {
  const{theme} =useSelector((state)=> state.theme);
  return (
<BrowserRouter>
<Header />
<div  className={theme}> 
 <Routes> 
  
  <Route path='/' element={<Home />}/>
  <Route path='/signup' element={<Signup />} />
  <Route  element={<PrivateRoute />} >  
  <Route path='/productlist' element={<Productlist />} />
  <Route path='/review' element={<Reviews  />} />
  </Route>

 </Routes>
 </div>
 <Footer />
</BrowserRouter>
      

  );
};


export default App
