import axios from 'axios';
import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate =useNavigate();
  const dispatch =useDispatch();
  const cartItems =useSelector((state)=>state.cart.cartItems);
  const {totalItems}=useSelector((state)=>state.cart);
  const{total} =useSelector((state)=>state.cart);
  const {currentuser}=useSelector((state)=>state.user);


  const apiurl=import.meta.env.VITE_APP_API_URL;
  
  
    return (
        <div id="total_main_container">
        <Card>
          <div className="total_container">
            <div className="left">
              <strong>TOTAL QUANTITY:</strong>
            </div>
            <div>
              <strong></strong>
            </div>
          </div>
          <div className="total_container">
            <div className="left">
              <strong>SUBTOTAL:</strong>
            </div>
            <div>
              <strong>₹</strong>
            </div>
          </div>
          <div className="total_container">
            <div className="left">
              <strong>SHIPPING:</strong>
            </div>
            <div>
              <strong>FREE</strong>
            </div>
          </div>
        </Card>
        <Card>
          <div className="total_container">
            <div className="left">
              <strong>TOTAL:</strong>
            </div>
            <div>
              <strong>₹</strong>
            </div>
          </div>
        </Card>
        <div className="px-2 py-3 gap-2"> 
          
        <Button>Purchase Item </Button>
  
        </div>
      </div>
    );
};

export default Cart;