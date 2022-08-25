import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shered/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
     <Home></Home>
     <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
