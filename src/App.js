import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shered/Footer';
import {Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './Pages/Login/Login';
import Navbar from './Pages/Shered/Navbar';
import Register from './Pages/Login/Register';
import CarpartsDetail from './Pages/CarPartsDetail/CarpartsDetail';
import AddCarParts from './Pages/AddParts/AddCarParts';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Deliverd from './Pages/Deliverd/Deliverd';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/Shered/NotFound';
import Contact from './Pages/Home/Contact';
import MyOrders from './Pages/MyOrders/MyOrders';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory/:id' element={<RequireAuth>
        <CarpartsDetail></CarpartsDetail>
      </RequireAuth>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addparts' element={<RequireAuth>
          <AddCarParts></AddCarParts>
        </RequireAuth>}></Route>
        <Route path='/manageitems' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/deliverd/:id' element={<RequireAuth>
          <Deliverd></Deliverd>
        </RequireAuth>}></Route>
        <Route path='/myorder' element={<RequireAuth>
          <MyOrders></MyOrders>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
