import { useState } from 'react';
import {authImage, LoginIcon} from '../assets/assets.js'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';

const Login = () => {
  {/*This is Login Page Components*/}
  const navicate = useNavigate();

  const [message, setMessage] = useState();
  const [formData,setFromData] = useState({
    email : "",
    password : ""
  })

  {/*Collecting the user data using useState*/}
  const handleChanges = (e) =>{
    const {name, value} = e.target;

    setFromData(prev => ({
      ...prev,
      [name] : value
    }))

    console.log(value);
  }

  {/*Senting data to springboot backend*/}
  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch('http://localhost:3000/api/login',{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      });
      const data = await response.json();

      if(data.success){
          localStorage.setItem('token','token');
          navicate('/home');
      }else{
        setMessage("* "+data.message);
      }

      console.log(data.token);
      
    } catch (error) {
      
    }
  }



  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-300 to-blue-700">
      <div className="border space-y-4 w-[400px] rounded-2xl text-center p-8 bg-white/20 backdrop-blur-md border-white/30 shadow-2xl ">
          <h2 className="text-3xl font-bold mb-5">LOGIN</h2>

          <div className='text-red-500 text-[16px] '>{message}</div>

          <div className="mb-5">
            <input
              name='email'
              type="email"
              value={formData.email}
              onChange={handleChanges}
              className="border-1 border-blue-300/30 bg-white/80 p-2 w-full rounded outline"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="">
            <input
              name='password'
              type="password"
              value={formData.password}
              onChange={handleChanges}
              className="border-1 border-blue-300/30 bg-white/80 p-2 w-full rounded outline"
              placeholder="Enter Your Password"
            />
          </div>


          <button className='border cursor-pointer text-white bg-blue-400  w-1/2 font-bold py-2 rounded
                            transition-transform duration-300 ease-in-out
                            hover:scale-105'
                  onClick={handleSubmit}>
            Login
          </button>
          <div className='text-center'>---or---</div>
          <div className='flex justify-around gap-2 items-center'>
              <div className='bg-white/90 border-2 border-white flex cursor-pointer items-center px-7 py-2 gap-2 rounded
                                transition-transform duration-300 ease-in-out
                                hover:scale-105'>
                <img src={LoginIcon.googleIcon} alt=""
                     className='w-[25px] h-[25px]'/>
                Google
              </div>
              <div className='bg-white border-2 flex border-white cursor-pointer items-center px-3 py-2 gap-2 rounded
                                transition-transform duration-300 ease-in-out
                                hover:scale-105'>
                <img src={LoginIcon.facebookIcon} alt=""
                     className='w-[25px] h-[25px]'/>
                FaceBook
              </div>
          </div>
          <div>
          <p className='text-sm'>Don't have an account? 
              <span className='font-bold underline cursor-pointer active:text-blue-600' 
                    onClick={()=>navicate('/register')}>Register
              </span>
          </p>
          </div>
        </div>

    </div>
  );
};



export default Login;