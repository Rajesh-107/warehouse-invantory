import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id,name, img, description, price, quantity, supplier} = service;
    const navigate = useNavigate();
    
    const carpartDetails = id => {
        navigate(`inventory/${id}`)
    }


    return (
        <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`${img}`} alt="blog" />
           <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{name}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{supplier}</h1>
              <p className="leading-relaxed mb-3">{description}</p>
              
              <p className="leading-relaxed mb-3">Quantity: {quantity}</p>
              <div className="flex justify-between flex-wrap">
                 <button onClick={() => carpartDetails(_id)} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Buy Now
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M5 12h14"></path>
                       <path d="M12 5l7 7-7 7"></path>
                    </svg>
                 </button>
                 <span className="btn text-white py-1 px-4 bg-indigo-600">Price: {price}</span>
              </div>
           </div>
        </div>
     </div>
    );
};

export default SingleService;