import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
 
      useEffect( () =>{
        const getItems = async () =>{
        const email = user.email;
         const url = `http://localhost:5000/orders?email=${email}`;
         const {data} = await axios.get(url);
         setMyItems(data);
        }
        getItems();
    },[user])
    return (
        <div>
          {
            myItems.map( myItem => 
            
            <div key={myItem._id} class="overflow-x-auto">
            <table class="table w-full">
          
              <thead>
                <tr>
                  
                  <th>Name</th>
                  <th>Supplier</th>
                  <th>Address</th>
                  <th>Quantity</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
               
                <tr>
                 
                  <td>{myItem.item}</td>
                  <td>{myItem.supplier}</td>
                  <td>{myItem.address}</td>
                  <td>{myItem.quantity}</td>
                  <td>{myItem.phone}</td>
                </tr>
              
              </tbody>
            </table>
          </div>)
          }
        </div>
    );
};

export default MyOrders;