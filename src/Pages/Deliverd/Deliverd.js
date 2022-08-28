import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useItemDetail from '../hooks/ItemsDetail';


const Deliverd = () => {
    const {id} = useParams();
    const [user] = useAuthState(auth);
    const [stockItem, setStockItem] = useItemDetail(id);

    
   
    
   
    const handleDeliverd=(e)=>{
        e.preventDefault();
            const order ={
                email: user.email,
                item: stockItem.name,
                id:id,
                supplier: stockItem.supplier,
                address: e.target.address.value,
                quantity:e.target.quantity.value,
                phone:e.target.phone.value,
                
            }
        if(stockItem.quantity > 0){
            const newQuantity = parseInt(stockItem.quantity)-1
            const updatedQuantity={quantity:newQuantity}
            fetch(`http://localhost:5000/inventory/order` , {
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedQuantity)
            })
            .then(res=>res.json())
            .then(data=>{
                setStockItem(data)
                toast.success('Delivery Successfull')
            })
        }
        else{
            toast.error('Sold Out')
        }
    }
    
    return (
        <div className='w-50 mx-auto'>
            
            <h2>Deliverd item :{stockItem.name} </h2>
            <form onSubmit={handleDeliverd}>
                <input className='w-100 mb-2' type="text" value={user?.displayName}  disabled  name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2'  type="email" value={user?.email}  disabled  name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="name" value={stockItem?.name} placeholder='orderName' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="supplier" value={stockItem?.supplier} placeholder='supplier' readOnly required />
                <br />
                <input className='w-100 mb-2'  type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="quantity" placeholder='quantity' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="phone" placeholder='phone' autoComplete='off' required />
                <br />
                <input  className='btn btn-secondary' type="submit" value="Submit" />
                {/* <ToastContainer></ToastContainer> */}
            </form>
        </div>
    );
};

export default Deliverd;