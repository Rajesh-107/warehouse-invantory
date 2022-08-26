import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let errorElement;
    if (error) {
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
    
      }
      if(user){
        navigate(from, {replace:true});
      }

    //   if(loading){
    //       return <Loading></Loading>
    //   }
    return (
        <div>
            <button
             onClick={()=> signInWithGoogle()}
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  style={{backgroundColor: '#3b5998'}}
                 
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
               
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>Continue with Google
                </button>




       
    </div>
    );
};

export default SocialLogin;