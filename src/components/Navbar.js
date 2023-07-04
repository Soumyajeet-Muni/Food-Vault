import React,{useState} from "react";
import Modal from '../Modal';
import Cart from '../screens/Cart';
import Badge from"react-bootstrap/Badge";
import { Link,useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
export default function Navbar() {
  let data=useCart();
  const [cartView, setCartView] = useState(false)
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')

    navigate("/login")
}
const loadCart = () => {
  setCartView(true)
}
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar bg-primary w-100" id="ram">
        <div className="container-fluid w-100 "  >
          <Link className="navbar-brand fs-1 fst-bold text-success "  to="/">
            Food Vault
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
              
          <div className="d-flex flex-row d-flex align-items-start" id="navbarNav">
              <div className="d-flex flex-row">
              {/* <Link
                  className="btn bg-info fs-6 text-white mx-1 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link> */}
                
              {(localStorage.getItem("token")) ?
            
              <Link
                className="btn bg-white fs-6 text-success mx-1 mb-2 "
                aria-current="page"
                to="/myOrder"
              >
                My Orders
              </Link>
             :""}
              </div>
                
            
            {(!localStorage.getItem("token")) ?
            <div className="d-flex">
             <Link className="btn bg-white fs-6 text-success mx-1 mb-2" to="/login">
                Login
              </Link>

              <Link className="btn bg-white fs-6 text-success mx-1 mb-2" to="/Signup">
                Signup
              </Link>
            </div>
            :
            <div className="d-flex">
              {/* < div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button> */}
             <div className="btn bg-white fs-6 text-success mx-1 mb-2" onClick={loadCart}>
              My Cart
              <Badge pill bg="danger">{ data.length}</Badge>
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
            <div className="btn bg-white  fs-6 text-success mx-1 mb-2" onClick={handleLogout}>
              logout
              </div>
              </div>
              }
          </div>
        </div>
      </nav>
    </>
  );
}
