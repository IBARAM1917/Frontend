import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    fetch();
  }, []);
  const apiurl = import.meta.env.VITE_APP_API_URL;
  const fetch = async () => {
    let res = await axios.get(`${apiurl}/products/`._id);
    // console.log(res.data);
    setProduct(res.data.products);
  };

  return (
    products && (
      <div class="container container-fluid">
        <div class="row f-flex justify-content-around">
          <div class="col-12 col-lg-5 img-fluid" id="product_image">
            <img src={products.image} alt="sdf" height="500" width="500" />
          </div>

          <div class="col-12 col-lg-5 mt-5">
            <h3>{products.name}</h3>
            <p id="product_id">Product #{products._id} </p>

            <hr />

            <div class="rating-outer">
              <div class="rating-inner">Rating:{products.rating}/5</div>
            </div>

            <hr />

            <p id="product_price">{products.price} </p>
            <div class="stockCounter d-inline">
              <span class="btn btn-danger minus">-</span>

              <input
                type="number"
                class="form-control count d-inline"
                value="1"
                readOnly
              />

              <span class="btn btn-primary plus">+</span>
            </div>
            <button
              type="button"
              id="cart_btn"
              class="btn btn-primary d-inline ml-4"
            >
              Add to Cart
            </button>

            <hr />

            <p>
              Status:{" "}
              <span
                id="stock_status "
                className={products.stock > 0 ? "text-success" : "text-danger"}
              >
                {product.stock > 0 ? "In Stock" : "Out Of Stock"}{" "}
              </span>
            </p>

            <hr />

            <h4 class="mt-2">Description:</h4>
            <p>{products.description}</p>
            <hr />
            <p id="product_seller mb-3">
              Sold by: <strong>{products.seller} </strong>
            </p>

            <div class="rating w-50"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
