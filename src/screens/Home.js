import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
// import Carouse"l from "../components/Carousal.js";
import img1 from "../images/img2.jpg";
import img2 from "../images/img3.jpg";
import img3 from "../images/chad-montano-MqT0asuoIcU-unsplash.jpg";
export default function Home() {
  const[search,setSearch] =useState('');
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response[0])
    setfooditem(response[0]);
    setfoodcat(response[1]);
  };
  useEffect(() => {
    loaddata();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit :"contain !important"}}>

<div className="carousel-inner " id='carousel'>
    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
        <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search for a Dish" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
        </div>
    </div>
    <div className="carousel-item active"  >
        <img src={img3} className="d-block w-100" style={{ filter: "brightness(60%)",height:"400px"  }} alt="..." />
    </div>
    <div className="carousel-item"> 
        <img src={img1} className="d-block w-100" style={{ filter: "brightness(60%)",height:"400px" }} alt="..." />
    </div>
    <div className="carousel-item">
        <img src={img2} className="d-block w-100" style={{ filter: "brightness(60%)",height:"400px" }} alt="..." />
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

      </div>
      <div className="container">
      <div className= " fs-1 fst-bold text-success">MENU :</div>
        {foodcat !== [] ? (
          foodcat.map((data) => {
            return (
              <div className="row mb-3 ">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {fooditem !== []? 
              fooditem.filter((item) => (item.CategoryName === data.CategoryName) &&  (item.name.toLowerCase().includes(search.toLowerCase())) )
              .map(filterItems =>{
                return(
                 <div key={filterItems._id} className="col-12 col-md-6 col-lg-3"> 
                 <Card fooditem={filterItems}
                 options={filterItems.options[0]}
                
                 ></Card>
                 </div>
                )
            
              }) :<div>No Such Data Found </div> }
              </div>
              
            );
          })
        ) : (
          <div>"""""""" </div>
        )}

      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
