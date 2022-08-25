import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
   const [carParts, setCarParts] = useState([]);

   useEffect( ()=> {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setCarParts(data.slice(0,6)))
  },[])
    return (
       
            
         <section className="text-gray-600 body-font">
            <div className= 'py-24 container m-auto lg:w-10/12 w-full' >
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-2 text-gray-900">CarParts Item availabe</h1>
               <div className="flex flex-wrap w-full mb-20 px-4">
                  
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                     
                     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Service</h1>
                    
                     <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                  </div>
               </div>
               <div className="flex flex-wrap">{
               
               carParts.map(service =>
                <SingleService key={service.id} service={service} />)}</div>
            </div>
         </section>
        
     
       
    );
};

export default Services;