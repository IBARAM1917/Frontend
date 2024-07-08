import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { useSelector } from 'react-redux';

const productlist = ({children}) => {
  const [products,setProducts]= useState ([]);
  const{theme} =useSelector((state)=> state.theme);
  useEffect(()=>{
 fetch();
  
  },[]);
  const apiurl=import.meta.env.VITE_APP_API_URL;
  const  fetch =async()=>{
   let res = await axios  .get(`${apiurl}/products`) 
   // console.log(res.data);
    setProducts(res.data.products)
  
  
  }  ;
  

  return (
    < > 
    <Fragment >

    <section id="products" className="container mt-5">
      <div className="row">
      
     {products.map(
       (e,index)=>{
        return <ProductCard  key={index} name={e.name} description={e.description} price={e.price} image={e.image} rating={e.rating} stock={e.stock} _id={e._id} />

       }
     )}
       
      </div>
      
    </section>
   
     </Fragment>
     </>
  );
};

export default productlist;