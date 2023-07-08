import {React,useState,useRef, useEffect}from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatchCart} from './ContextReducer'
import useCart from "../screens/Cart";
import { Link } from "react-router-dom";
// import img1 from "../images/chad-montano-MqT0asuoIcU-unsplash.jpg";

export default function Card(props) {
  const data = useCart();
  let options=props.options;
  let fooditem=props.item;
  let priceoptions=Object.keys(options);
  const priceRef = useRef();
  let navigate = useNavigate()
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }

  const dispatch = useDispatchCart();


  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  
  const handleAddToCart = async () =>{
    let food =[]
    for(const item of Object.keys(data)){
      if(item.id === props.fooditem._id){
        food=item;
        break;
      }
    }
if(food !== [])
{
  if(food.size === size){
  await dispatch({type: "UPDATE", id:fooditem._id,price:finalprice,qty:qty})
  return
}
else if (food.size !== size){
  await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprice,qty:qty,size:size,img: props.fooditem.img})
  return
}
return
} 
await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprice,qty:qty,size:size,img: props.fooditem.img})
  
}
  let finalprice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, []) 
  return (
    <>
      <div className="card mt-3 " style={{ width: "18rem", maxHeight: "460px" }}>
        <img src={props.fooditem.img} className="card-img-top" style={{height:"200px",objectfit:"fill"  }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.fooditem.name}</h5>
          <p className="card-text"></p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded" onClick={handleClick}onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100  bg-success rounded" ref={priceRef} onClick={handleClick}onChange={(e) => setSize(e.target.value)}>
              {priceoptions.map((data)=>{
                return <option key={data} value={data}>{data}</option> 
              })}
                          </select>

            <div className="d-inline h-100 fs-5"> ₹{finalprice}/-</div>
          </div>
          <hr/>
          {(localStorage.getItem("token")) ?
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>:<Link className={`btn btn-success justify-center ms-2 `} to ="/login">  Login/Sigup to Add to Cart</Link>}
        </div>
      </div>
    </>
  );
}
