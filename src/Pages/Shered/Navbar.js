import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <Link to='' class="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="#">
    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style={{height: '15px'}} alt=""
      loading="lazy" />
  </Link>
 
  <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Home</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Car parts</a>
    </li>
    <li class="nav-item p-2">
      <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Blogs</a>
    </li>
  </ul>
 
  </div>
  
  <div class="flex items-center relative">
 
  <Link to='' class="text-gray-500  hover:text-gray-700 focus:text-gray-700 mr-4">
   <p>Sign In</p>
  </Link>
  

  <div class="dropdown relative">
    
    
  </div>
  <div class="dropdown relative">
    <Link to='' class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full"
        style={{height: '25px', width: '25px'}} alt="" loading="lazy" />
    </Link>
   
  </div>
  </div>
  
  </div>
</nav>
        </div>
    );
};

export default Navbar;