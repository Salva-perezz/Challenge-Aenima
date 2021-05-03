import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProducts = createAction('SET_PRODUCTS');

export const productsReducer = createReducer([],{
    [setProducts]: (state, action) => action.payload,
  });