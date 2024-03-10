import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='l'>
           <Image
            src="/assets/images/footer.jpg"
            alt="icons"
             width={120}
             height={120}
             /*className='l' */
            />
            </div>
            <p className='l-txt'>@ Copyright 2024 TrackWatch</p>
            
    </>
  )
}

export default Footer