import React from 'react'
 
const Description = ({description}) => {
  return (
    <>
        <div className='mt-15 [word-spacing:6px] text-left leading-8 text-gray-600'>
            {description}
        </div>
    </>
  )
}

export default Description