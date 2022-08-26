// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBw-whAihuu1YeRD7qHhXyAgyBLAVhT_U",
  authDomain: "warehouse-inventory-d9012.firebaseapp.com",
  projectId: "warehouse-inventory-d9012",
  storageBucket: "warehouse-inventory-d9012.appspot.com",
  messagingSenderId: "309996636848",
  appId: "1:309996636848:web:b76e6e52435b2b10130975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;