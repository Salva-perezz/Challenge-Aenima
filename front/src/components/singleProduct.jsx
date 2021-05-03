import React from "react";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);

  return (
    <div className="single_product_container">
      <div>
        <img className="single_product_image" src={selectedProduct.image} alt="" />
      </div>
      <h1 className="single_product_name">{selectedProduct.name}</h1>
      <p className="single_product_p">{selectedProduct.description}</p>
      <p className="single_product_p">${selectedProduct.price}</p>
    </div>
  );
};

export default SingleProduct;
