import "./App.css";
import { useEffect } from "react";
import Catalogue from "./components/catalogue";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./store/products";
import { Route, Switch } from "react-router";
import SingleProduct from "./components/singleProduct";
import Navbar from "./components/navbar";
import AddProduct from "./components/addProduct";
import EditProduct from "./components/editProduct";

function App() {
  const dispatch = useDispatch();
  const changeSpy = useSelector((state) => state.changeSpy);

  useEffect(() => {
    axios
      .get("/api/product")
      .then((products) => {
        dispatch(setProducts(products.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('PASE');
    axios
      .get("/api/product")
      .then((products) => {
        dispatch(setProducts(products.data));
      })
      .catch((err) => console.log(err));
  }, [changeSpy]);

  return (
    <>
      <div className='navbar_container'>
        <Navbar />
      </div>
      <Switch>
        <Route path='/add/product' component={AddProduct} />
        <Route path="/product" component={SingleProduct} />
        <Route path='/edit/product' component={EditProduct}/>
        <Route path="/" component={Catalogue} />
      </Switch>
    </>
  );
}

export default App;
