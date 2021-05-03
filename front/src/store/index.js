import { configureStore } from '@reduxjs/toolkit';
import { changeSpyReducer } from './changeSpy';
import { productsReducer } from './products';
import { searchInputReducer } from './searchInput';
import { selectedProductReducer } from './selectedProduct';

export default configureStore({
    reducer:{
        products: productsReducer,
        selectedProduct: selectedProductReducer,
        changeSpy: changeSpyReducer,
        searchInput: searchInputReducer
    }
});