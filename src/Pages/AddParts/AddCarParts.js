import React from "react";
import { useForm } from "react-hook-form";

const AddCarParts = (e) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        e.target.reset()
      });
  };

  return (
    <div className="flex justify-center items-center  py-14">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Add Items!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Item Name"
              {...register("name", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              {...register("description", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Price"
              type="number"
              {...register("price", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Quantity"
              type="quantity"
              {...register("quantity", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Photo URL"
              type="text"
              {...register("img", )}
            />
            <input
              class="input input-bordered input-primary w-full max-w-xs"
              placeholder="Supplier"
              type="text"
              {...register("supplier", )}
            />
            <input
              className="mb-3 btn btn-secondary"
              type="submit"
              value="Stock Item"
            />
          </form>
        </div>
      </div>

      {/* 
             <form onSubmit={handleSubmit(onSubmit)}>
      <input   {...register("firstName", { required: true, maxLength: 20 })} />
      <input   {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input   type="number" {...register("age", { min: 18, max: 99 })} />
      
    </form> */}
    </div>
  );
};

export default AddCarParts;
