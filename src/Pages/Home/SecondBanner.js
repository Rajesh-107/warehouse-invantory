import React from 'react';

const SecondBanner = () => {
    return (
        <div>
             <div className='lg:px-14'>
             <section className="text-gray-600 body-font">
         <div className="flex py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               Invest in warehouse 
                  <br className="hidden lg:inline-block" />
                  management software
               </h1>
               <p className="mb-8 leading-relaxed">This might seem the most obvious point of all, but there’s far more to having an organised warehouse than simply ensuring your stock is where it should be though of course, that is pretty important!.</p>
               <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Contact</button>
                 
               </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
               <img className="object-cover object-center rounded" alt="hero" src="https://images.pond5.com/warehouse-workers-forklift-robot-and-illustration-161689720_iconl_wide_nowm.jpeg" />
            </div>
         </div>
      </section>
        </div>
        </div>
    );
};

export default SecondBanner;