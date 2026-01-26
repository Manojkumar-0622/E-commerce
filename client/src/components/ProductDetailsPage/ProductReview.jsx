import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const ProductReview = ({review}) => {

  const [start,Setstart] = useState(-1);
  const [isChecked, SetIsChecked] = useState(false);

  const [reviewForm,SetReviewForm] = useState({
    review : "",
    name : "",
    email : ""
  });

  const handleChange =(e)=>{
    const {name,value} = e.target;
    SetReviewForm(item => ({
      ...item,
      [name] : value
    }))
  }

  const handleSubmit =()=>{
    if(!isChecked){
      alert('select the check box....');
      return;
    }

    console.log(reviewForm);
  }

  console.log(isChecked);

  return (
    <div className='mt-15'>
        <div className=''>
            {review.map((item,index)=>(
              <div className='m-10 max-w-[60%] flex'>
                  <img src={item.image} 
                        alt=""
                        className='w-15 h-15 rounded-full' />
                  <div className='ml-2'>
                      <div className='flex'>
                        <div className='flex mt-2 ml-2'>
                            {Array.from({length : item.starts}).map((_,index)=>(
                              <FaStar key={index} className='fill-amber-400'/>
                            ))}
                        </div>
                        <div className='ml-5  text-[20px] font-semibold'>
                            {item.name}
                        </div>
                        <div className='mt-1 ml-3 text-[15px]  text-gray-600'>
                            - {item.date}
                        </div>
                      </div>
                      
                      <div className='ml-2 mt-1'>
                        {item.message}
                      </div>
                  </div>
                  
              </div>
            ))}
        </div>

        {/*Review submiting form*/}
        <div className='font-light ml-10'>
          <div>Your email address will not be published. Required fields are marked <span className='text-red-500'>*</span></div>
          <div className='mt-2'>Your rating <span className='text-red-500'>*</span></div>
          <div className='flex mt-5'>
            {Array.from({length : 5}).map((_,index)=>(
              <FaStar className={`ml-1 cursor-pointer ${index <= start ? 'fill-amber-400' : ''}`}
                      onClick={()=> Setstart(index)}/>
            ))}
          </div>

          <div className='mt-5 w-full'>
            <div>Enter Review <span className='text-red-500'>*</span> </div>
              <textarea
                name='review'
                value={reviewForm.review}
                onChange={handleChange}
                className="w-full p-3 mt-2 h-45 resize-none rounded
                          border border-gray-300 outline-none
                          focus:shadow-2xl focus:border-0"
              />
          </div>

          <div className='mt-5'>
            <div>Name <span className='text-red-500'>*</span></div>

            <input type="text"
                   name='name'
                   value={reviewForm.name}
                   onChange={handleChange}
                   className='border border-gray-300 w-full mt-2 h-12
                              focus:shadow-2xl outline-0 p-2 focus:border-0' />
          </div>

          <div className='mt-5'>
            <div>Email <span className='text-red-500'>*</span></div>

            <input type="text"
                   name='email'
                   value={reviewForm.email}
                   onChange={handleChange}
                   className='border border-gray-300 w-full mt-2 h-12
                              focus:shadow-2xl outline-0 p-2 focus:border-0' />
          </div>

          <div className='flex mt-5' >
            <input type="checkbox"
                   checked={isChecked}
                   onChange={(e)=> SetIsChecked(e.target.checked)}
            />
            <div className='ml-2'> Save my name, email, and website in this browser for the next time I comment.</div>
          </div>

          <div className='mt-5 cursor-pointer border inline-block px-6 py-3 font-bold text-white          bg-orange-800 hover:bg-orange-500 transform duration-200'
               onClick={()=>handleSubmit()}>
            SUBMIT
          </div>
        </div>
    </div>
  )
}

export default ProductReview