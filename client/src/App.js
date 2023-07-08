// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from './components/ContextReducer.js';
import Home from "./screens/Home";

 import Login from "./screens/Login";
import "./App.css";
import{
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
import Signup from './screens/Signup.js';
import MyOrder from './screens/MyOrder.js';
import Payment from './screens/Payment.js';
import Final from './screens/Final.js';

function App() {
  return (
    <CartProvider>
      <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/myOrder" element={<MyOrder/>}></Route>
        <Route exact path="/Payment" element={<Payment/>}></Route>
        <Route exact path="/Final" element={<Final/>}></Route>
        </Routes>
      </div>
    </Router>

    </CartProvider>
      );
}

export default App;
