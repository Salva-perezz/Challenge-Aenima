import { createAction, createReducer } from "@reduxjs/toolkit";

export const setChangeSpy = createAction('SET_CHANGE_SPY');

export const changeSpyReducer = createReducer(true,{
    [setChangeSpy]: (state, action) => !state
  });