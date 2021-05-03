import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { setProducts } from "../store/products";
import { setSearchInput } from "../store/searchInput";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(state => state.searchInput);
  
  return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">Home</Link>
          <Link to='/add/product' className="btn btn-outline-success add_navbar">
              Añadir producto
            </Link>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={e => dispatch(setSearchInput(e.target.value))}
            />
          </form>
        </div>
      </nav>
  );
};

export default Navbar;
