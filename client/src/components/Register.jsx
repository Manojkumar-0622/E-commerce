import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {authImage, LoginIcon} from '../assets/assets.js'
import { FaGoogle, FaFacebookF } from "react-icons/fa";


const Register = () => {
  {/*This is Register Page Components*/}
  const navicate = useNavigate();

  const [animation, setAnimation] = useState(false);
  const [message, setMessage] = useState();
  const [formData,setFromData] = useState({
    username : "",
    email : "",
    password : ""
  })

  useEffect(()=>{
    setAnimation(true);
  },[])

  {/*Collecting the user data using useState*/}
  const handleChanges = (e) =>{
    const {name, value} = e.target;

    setFromData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  {/*Senting data to springboot backend*/}
  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(formData);
    
    try {
      const response = await fetch('http://localhost:3000/api/register',{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
      });

      const data = await response.json();

      if(data.success === true){
        navicate('/');
      }else{
        setMessage("*" +data.message);
      }

      console.log(message);

    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-violet-300 to-blue-700">
      <div className={`border space-y-4 w-[400px] transition-all duration-700 ease-in-out rounded-2xl text-center p-8 bg-white/20 backdrop-blur-md border-white/30 shadow-2xl 
                      ${animation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}  `}>
          <h2 className="text-3xl font-bold mb-5">REGISTER</h2>

          <div className='text-red-500 text-[16px] '>{message}</div>
          
          <div className="">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChanges}
              className="border-1 border-blue-300/30 bg-white/80 p-2 w-full rounded outline"
              placeholder="Enter Name"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChanges}
              className="border-1 border-blue-300/30 bg-white/80 p-2 w-full rounded outline"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="">
            <input
              type="password"
              name="password"
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
            Sign Up
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


          <p className='text-sm'>Already have an account? 
            <span className='font-bold underline cursor-pointer active:text-blue-600'
                  onClick={()=> navicate('/')}>
              Login
            </span>
          </p>
        </div>

    </div>
  );
};



export default Register;