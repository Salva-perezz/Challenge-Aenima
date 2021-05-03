import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSelectedProduct = createAction('SET_SELECTED_PRODUCT');

export const selectedProductReducer = createReducer([],{
    [setSelectedProduct]: (state, action) => action.payload,
  });