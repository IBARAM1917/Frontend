import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Slice/cartSlice';
import { toast } from 'react-toastify';


const productlist = () => {
  const dispatch =useDispatch();
  const product = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.totalItems);
 const [products,setProducts]= useState ([]);
 
  useEffect(()=>{
 fetch();
  
  },[]);
  const apiurl=import.meta.env.VITE_APP_API_URL;
  const  fetch =async()=>{
   let res = await axios  .get(`${apiurl}/products`) 
   // console.log(res.data);
   .then((res)=>{
       setProducts(res.data.products)
   })
   .catch((error)=>{
    console.log(error);
   })
    
  };
  const AddtoCart =
  (_id,
  name,
   image,
  description,
  price,
  quantity) => {
    const item = {
      _id: _id,
      name:name,
      image:image,
      description: description,
      price: price,
      quantity:quantity,
    };
    if (totalItems > 0) {
      const isItemInCart = cartItems.find(
        (cartItem) => cartItem._id === item._id
      );
      if (!isItemInCart) {
        item.quantity = 1;
        dispatch(addToCart(item));
      } else {
        toast("Product already added to  the Cart");
      }
    } else {
      item.qty = 1;
      dispatch(addToCart(item));
    }
  };

  

  return (
    < > 
    <Fragment >

    <section id="products" className="container mt-5">
      <div className="row">
      
     {products.map(
       (e,index)=>{
        return (
          <div key={index} className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto" src={e.image} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        <a>{e.name}</a>
                      </h5>
                      <div className=" mt-auto">
                        <a>{e.description}</a>
                        <br />
                        <a>Rating:{e.rating}/5</a>
                        <br />
                        <a>Stock:{e.stock}</a>
                      </div>
                      <p className="card-text">${e.price}</p>
    
                      <Button
                      id={e._id}
                      type='button'
                      gradientDuoTone="redToYellow"
                      onClick={()=>
                        AddtoCart(
                          e._id,
                          e.name,
                          e.image,
                          e.description,
                          e.price,
                          1
                        )
                      }
                     >
                        Add To Cart
                      </Button>
                    </div>
          </div>
        </div>
        )
        

       }
     )}
       
      </div>
      
    </section>
   
     </Fragment>
     </>
  );
};

export default productlist;