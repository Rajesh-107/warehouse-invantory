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

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/inventory/:id' element={<CarpartsDetail></CarpartsDetail>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addparts' element={<AddCarParts></AddCarParts>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
