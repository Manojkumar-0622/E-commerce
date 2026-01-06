import React from 'react'

const DetailPageNav = ( { PreviousItem, NextItem, Products} ) => {

    console.log(PreviousItem);

    return (
        <>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    {Products?.Categories?.map(item => (
                        <div className='text-[17px] text-gray-600'>
                            {item}<span className='pl-2'>/</span>
                        </div>
                    ))}
                </div>
                <div className='flex gap-3 mr-5 text-[15px]'>
                    <div className='group cursor-pointer relative'>
                        PREVIOUS
                        <div className='border absolute top-8 '>
                            {PreviousItem && (
                                <div>{PreviousItem.name}</div>
                            )}
                        </div>
                    </div>



                    <span>|</span>
                    <div>NEXT</div>
                </div>
            </div>
        </>
    )
}

export default DetailPageNav