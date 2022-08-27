import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarpartsDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [update,setUpdate] = useState({})

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  });

  const handleRestack=event=>{
    event.preventDefault()
    const newQuantity=parseInt(event.target.quantity.value )+parseInt(inventory.quantity)
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
        event.target.reset()
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
          <p className="text-lg text-red-500">Supplyer: {inventory.price}</p>
          <p className="text-lg">Quantity: {inventory.quantity}</p>
          <div class="card-actions justify-start">
          <button class="btn btn-primary">Deliverd</button>
          </div>
          <form onSubmit={handleRestack}>
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="enter amount"
                class="input input-bordered input-error "
              />

              <input
                type="submit"
                className=" ml-3 btn    font-bold rounded-lg"
                value="Restock"
              />
            </form>
        </div>
      </div>
    </div>
  );
};

export default CarpartsDetail;
