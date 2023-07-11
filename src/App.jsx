import Cart from "./pages/Cart";
// import CartItems from "./pages/CartItems";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import{
  Router,
  Route,
  Routes,
}from "react-router-dom";
const App = () => {
  return(
  <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/ProductList" element={<ProductList/>}/> */}
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
  );
};
export default App;