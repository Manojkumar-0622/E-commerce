import React, { useState } from 'react'
import Description from './Description';
import ProductColor from './productColor';
import ProductReview from './ProductReview';

const AboutProducts = ({products}) => {
    // const reviewCount = Array.isArray(products?.review) ? products?.review.length : 0;
    // console.log(reviewCount);


    const reviewCount = products?.product_review.length;
    const review = products?.product_review;

    {/*This state used to do check which option user click*/}
    const  [userOption,SetUserOPtion] = useState("description");
    const description = products?.full_des;
    const colorsOption = products?.colors;

    return (
        <div className=' w-[80%] m-auto mt-15'>
            <div className='flex justify-around cursor-pointer w-full text-[21px] text-gray-500'>
                <div onClick={()=>SetUserOPtion("description")} 
                     className={`${userOption === "description" ? 'text-orange-600' : ''}`}>
                        Description
                </div>
                <div onClick={()=>SetUserOPtion("addtionalInfo")}
                     className={`${userOption === "addtionalInfo" ? 'text-orange-600' : ''}`}>
                    Additional Information
                </div>
                <div onClick={()=>SetUserOPtion("review")}
                     className={`${userOption === "review" ? 'text-orange-600' : ''}`}>
                    Review <span className='text-[20px]'>({reviewCount})</span>
                </div>
            </div>


            {userOption === "description" && <Description description={description}/>}
            {userOption === "addtionalInfo" && <ProductColor colorsOption={colorsOption}/>}
            {userOption === "review" && <ProductReview review={review}/>}
            
        </div>
    )
}

export default AboutProducts