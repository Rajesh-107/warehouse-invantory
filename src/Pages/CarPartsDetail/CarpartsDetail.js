import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';

const CarpartsDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [update,setUpdate] = useState({})

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [update]);

//   const handleDeliverd=()=>{
//     if(inventory.quantity > 0){
//         const newQuantity=parseInt(inventory.quantity)-1
//         const updatedQuantity={quantity:newQuantity}
//         fetch(`http://localhost:5000/inventory/${id}`,{
//             method:'PUT',
//             headers:{
//                 'content-type':'application/json'
//             },
//             body:JSON.stringify(updatedQuantity)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             setUpdate(data)
//             toast.success('Delivery Successfull')
//         })
//     }
//     else{
//         toast.error('Sold Out')
//     }
// }



  const handleRestock= e => {
    e.preventDefault()
    const newQuantity=parseInt(e.target.quantity.value )+parseInt(inventory.quantity)
    const updatedQuantity={quantity : newQuantity}
    fetch(`http://localhost:5000/inventory/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedQuantity)
    })
    .then(res=>res.json())
    .then(data=>{
        setUpdate(data)
        window("Restock successfully");
        e.target.reset()
    })

}


  return (
    <div className="px-14 py-14">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={inventory.img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{inventory.name}</h2>
          <p className="text-xl">{inventory.description}</p>
          <p className="text-red-500 font-bold">Price: {inventory.price}</p>
          <p className="text-lg text-red-500">Supplyer: {inventory.supplier}</p>
          <p className="text-lg">Quantity: {inventory.quantity}</p>
          <div class="card-actions justify-start">
          <button  class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> <Link to={`/deliverd/${id}`}>Delivery</Link> </button>
          </div>
          <form onSubmit={handleRestock}>
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="Please enter Quantity"
                class="input input-bordered "
              />

              <input
                type="submit"
                className=" ml-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  "
                value="Restock"
              />
            </form>
        </div>
      </div>
    </div>
  );
};

export default CarpartsDetail;
