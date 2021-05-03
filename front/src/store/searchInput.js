import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearchInput = createAction('SET_SEARCH_INPUT');

export const searchInputReducer = createReducer('',{
    [setSearchInput]: (state, action) => action.payload,
  });