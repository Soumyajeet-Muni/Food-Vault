

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Payment() {
    let navigate=useNavigate();
    const handlesubmit = (event) => {
        navigate('/Final');
    }
  return (
    <div>
        <Navbar/>
      <div className="description">
       <h3>Final Amount To Be Paid:</h3>
       <h5>{localStorage.getItem("price")}</h5>
            {/* <form action="http://localhost:5000/api/Routes/Payment.js" method="POST"> */}
       <button type="submit" onClick={handlesubmit}>
         Pay Now
       </button>
     {/* </form> */}
       
       </div>
       <Footer/>
    </div>
  )
}
