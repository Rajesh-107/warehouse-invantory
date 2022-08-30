import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useItemDetail from "../hooks/ItemsDetail";

const Deliverd = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [stockItem, setStockItem] = useItemDetail(id);

  const handleDeliverd = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      item: stockItem.name,
      id: id,
      supplier: stockItem.supplier,
      address: e.target.address.value,
      quantity: e.target.quantity.value,
      phone: e.target.phone.value,
    };
    if (stockItem.quantity > 0) {
      const newQuantity = parseInt(stockItem.quantity) - 1;
      const updatedQuantity = { quantity: newQuantity };
      axios
        .post("https://rocky-gorge-40562.herokuapp.com/order", order)

        .then((response) => {
          console.log(response);
          const { data } = response;
          if (data.insertedId) {
            toast("See you soon!!");
            e.target.reset();
          }
        });
    } else {
      toast.error("Sold Out");
    }
  };

  return (
    <div className="flex justify-center py-14">
   
      <form onSubmit={handleDeliverd}>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
        <input type="text"  name="name"  value={user?.displayName} placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
        <input type="text"  name="email"  value={user?.email} placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
        <input type="text" name="name" value={stockItem?.name} placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
        <input type="text"   name="supplier" value={stockItem?.supplier} placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
       
        <input type="number" name="quantity"  placeholder="Quantity" class="input input-bordered input-secondary w-full max-w-xs" />
        <input type="text"  name="phone"  placeholder="Phone number" class="input input-bordered input-secondary w-full max-w-xs" />
        <input type="text"  name="address"  placeholder="address" class="input input-bordered input-secondary w-full max-w-xs" />
         
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </form>
      
      
        {/* <ToastContainer></ToastContainer> */}

    </div>
  );
};

export default Deliverd;
