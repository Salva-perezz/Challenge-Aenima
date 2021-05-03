import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setChangeSpy } from "../store/changeSpy";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch(); 

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if(!productName || !productDescription || !productImage || !productPrice) return setError(true);

    await axios.post('/api/product', {
        name: productName,
        description: productDescription,
        image: productImage,
        price: productPrice
    });

    dispatch(setChangeSpy());
    history.push('/');    
  };

  return (
    <div className="add_product_main_container">
      <div className="add_product_container">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label className="form-label">Nombre del producto *</label>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción del producto *</label>
            <input
              type="text"
              className="form-control"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <label className="form-label">Precio del producto *</label>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen del producto *</label>
            <input
              type="text"
              className="form-control"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          {error && (<p className='add_product_error'>Debe completar todos los campos</p>)}
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
