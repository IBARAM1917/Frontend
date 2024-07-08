import React from 'react';

const ProductCard = ({name,description,price,image,rating,stock}) => {
  
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
            <a href="#" id="view_btn" className="btn btn-block">Add To Cart</a>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;