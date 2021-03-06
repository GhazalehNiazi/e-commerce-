import { useEffect } from "react";
import { Routes, Route ,Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Register from "./components/register/Register";
import LandingPage from "./components/landingPage/LandingPage";
import MainShoppingPage from "./components/shopping/MainShoppingPage";
import Order from "./components/order/Order";
import Cart from "./components/cart/Cart";

import { actionTypes } from "./redux/contacts/actionType";
import { desk } from "./components/data/items";
import { sofa } from "./components/data/items";

import "./components/styles/css/main.css";
// sass --watch src/components/styles/sass:src/components/styles/css

function App() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: actionTypes.SET_PRODUCT, payload: desk });
    dispatch({ type: actionTypes.SET_PRODUCT, payload: sofa });
  }, []);

  console.log(selector);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="shopping/:category" element={<MainShoppingPage />} />
        <Route path="order/:productId" element={<Order />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Register />} />
        <Route
          path="*"
          element={
            <main style={{ fontSize: 3 + 'rem' ,display:'flex' , justifyContent:"center", alignContent:'center',padding:10+'rem',flexDirection:'column'}}>
              <p>There's nothing here!</p>
              <Link  to='/'><button style={{width:'fitContent',padding:1+'rem',margin:1+'rem'}}>Go back to Home</button></Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
