import React from 'react';

const MainBanner = () => {
    return (
        <div>
          <div class="lg:hero min-h-screen " style={{backgroundImage: `url(https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 lg:text-5xl font-bold">Hello there</h1>
      <p class="lg:mb-5 lg:text-xl">A warehouse is a building for storing goods. Warehouses are used by manufacturers, importers, exporters, wholesalers, transport businesses, customs, etc. They are usually large plain buildings in industrial parks on the outskirts of cities, towns.</p>
      <button class=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MainBanner;