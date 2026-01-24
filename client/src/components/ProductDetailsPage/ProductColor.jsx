import React from 'react'

const ProductColor = ({colorsOption}) => {
  return (
    <div className='flex  justify-center mt-10 text-gray-600'>
        <div className='border border-gray-400  text-[19px] w-60 px-5 py-2'>
            color
        </div>
        <div className='border border-gray-400  text-[19px] w-120 px-5 py-2 flex'>
            {colorsOption.map((item,index)=>(
                <div>{item}{ colorsOption.length-1 > index ? <span>,</span> : ''} </div>
            ))}
        </div>
    </div>
  )
}

export default ProductColor;