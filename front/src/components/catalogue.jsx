import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../store/products";
import { setChangeSpy } from "../store/changeSpy";
import { setSearchInput } from "../store/searchInput";

const Catalogue = () => {
  const products = useSelector((state) => state.products);
  const searchInput = useSelector((state) => state.searchInput);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [localChangeSpy, setLocalChangeSpy] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {}, [searchInput]);
  useEffect(() => {
  }, [localChangeSpy])

    const filterHandler = (e) => {
        e.preventDefault();
        const productsFiltered = [];

        axios.get('/api/product').then(products => {
            productsFiltered.push(products.data.filter(product => product.price >= minValue && product.price <= maxValue))
        }).then(() => {
            dispatch(setProducts(productsFiltered[0]));
        });
    }

    const resetHandler = (e) => {
        e.preventDefault();

        setMaxValue('');
        setMinValue('');
        dispatch(setChangeSpy());
        setLocalChangeSpy(!localChangeSpy)
    }

  return (
    <>
      <div className="filter_container">
        <p>Filtrar por precio</p>
        <form onSubmit={e => filterHandler(e)}>
          <input onChange={e => setMinValue(e.target.value)} value={minValue} placeholder="Minimo" type="number" />
          <input onChange={e => setMaxValue(e.target.value)} value={maxValue} placeholder="Maximo" type="number" />
          <button type='submit' className="btn btn-light boton_filtrar">Filtrar</button>
          <button onClick={e => resetHandler(e)} className="btn btn-light boton_filtrar">Limpiar</button>
        </form>
      </div>
      <div className="container_catalogue">
        {products.length ? (
          products.map((product, key) => {
            if (searchInput === "") {
              return (
                <ProductCard
                  key={key}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            } else if (
              product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ) {
              return (
                <ProductCard
                  key={key}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            }
          })
        ) : (
          <h1>El catalogo esta vacio</h1>
        )}
      </div>
    </>
  );
};

export default Catalogue;
