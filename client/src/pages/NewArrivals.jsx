import React from 'react'

const NewArrivals = ({dummayArrival,title}) => {

    console.log(dummayArrival);

    return (
        <div className='mt-22'>
             <div className='text-center text-gray-800 text-4xl'>{title}</div>
             <div className='flex'>
                {dummayArrival.map(items =>(
                    <div>
                        <img src={items.images[0].normal_img} alt="" />
                    </div>
                ))}
             </div>
        </div>
    )
}

export default NewArrivals