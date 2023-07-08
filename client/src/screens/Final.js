import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Final() {
  return (
    <div>
        <Navbar/>
      <h1>Your Payment was Successfull!!!</h1>
      <div>
           <Link
                  className="btn bg-primary fs-6 text-white mx-1  d-flex justify-content-center "
                  aria-current="page"
                  to="/"
                >
                  Back to Home
                </Link></div> 
      <Footer/>
    </div>
  )
}
