import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({name,description,price,image,rating,stock,_id}) => {
  
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto"
            src={image}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <a >{name}</a>
            </h5>
            <div className=" mt-auto">
             <a>{description}</a>
             <br/>
             <a>Rating:{rating}/5</a>
             <br /> 
             <a>Stock:{stock}</a>
            </div>
            <p className="card-text">${price}</p>

            <Button  to={"/cart"}  id="view_btn" className="btn btn-block  border-none">Add To Cart </Button>
          
          </div>
        </div>
      </div>
    );
};

export default ProductCard;