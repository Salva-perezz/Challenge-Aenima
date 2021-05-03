import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setChangeSpy } from "../store/changeSpy";
import { setSelectedProduct } from "../store/selectedProduct";

const ProductCard = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = (e, id, action) => {
    e.preventDefault();

    axios
      .get(`/api/product/${id}`)
      .then((product) => {
        dispatch(setSelectedProduct(product.data));
      })
      .then(() => {
        action === 'VIEW' ? history.push("/product") : history.push('/edit/product');
      });
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();

    axios.delete(`/api/product/${id}`)
    .then(() => {
      dispatch(setChangeSpy());
    });
  };

  return (
    <div className="card card_cointainer" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title card_text">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item card_text ul_card">{`$ ${price}`}</li>
      </ul>
      <div className="d-grid gap-2 d-md-block">
        <button
          onClick={(e) => clickHandler(e, id, 'VIEW')}
          className="btn btn-light"
        >
          Ver
        </button>
        <button onClick={e => deleteHandler(e, id)} className="btn btn-light boton_card">Eliminar</button>
        <button onClick={e => clickHandler(e, id, 'EDIT')} className="btn btn-light boton_card">Editar</button>
      </div>
    </div>
  );
};

export default ProductCard;
