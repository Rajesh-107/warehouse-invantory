import React from 'react';
import useServices from '../hooks/useServices';

const ManageInventory = () => {
    const [carParts,setCarParts] = useServices()

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure about that?');
        if(proceed){
            const url = `https://rocky-gorge-40562.herokuapp.com/inventory/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remainingItem = carParts.filter(carPart => carPart._id !== id);
                setCarParts(remainingItem);
            })
        }
    }
    return (
        <div className='flex flex-wrap'>
            {
                carParts.map(carPart => <div key={carPart._id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                   <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`${carPart.img}`} alt="blog" />
                   <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{carPart.name}</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{carPart.supplier}</h1>
                      <p className="leading-relaxed mb-3">{carPart.description}</p>
                      
                      <p className="leading-relaxed mb-3">Quantity: {carPart.quantity}</p>
                      <div className="flex justify-between flex-wrap">
                         <button onClick={()=> handleDelete(carPart._id)} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Delete Now
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                               <path d="M5 12h14"></path>
                               <path d="M12 5l7 7-7 7"></path>
                            </svg>
                         </button>
                         <span className="btn text-white py-1 px-4 bg-indigo-600">Price: {carPart.price}</span>
                      </div>
                   </div>
                </div>
             </div> )
            }
        </div>
    );
};

export default ManageInventory;