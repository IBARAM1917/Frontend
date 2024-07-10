import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";
import { toast } from "react-toastify";


addToCart
const ProductCard = ({
  name,
  description,
  price,
  image,
  rating,
  stock,
  _id,
}) => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.totalItems);


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
          item.qty = 1;
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
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
                <img className="card-img-top mx-auto" src={image} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <a>{name}</a>
                  </h5>
                  <div className=" mt-auto">
                    <a>{description}</a>
                    <br />
                    <a>Rating:{rating}/5</a>
                    <br />
                    <a>Stock:{stock}</a>
                  </div>
                  <p className="card-text">${price}</p>

                  <Button
                    id={product._id}
                    type="button"
                    onClick={() =>
                      AddtoCart(
                        _id,
                        name,
                        image,
                        description,
                        price,
                        1
                      )
                    }
                    className="btn btn-block  border-none"
                   gradientDuoTone="redToYellow"
                 >
                    Add To Cart
                  </Button>
                </div>
      </div>
    </div>
  );
};

export default ProductCard;
