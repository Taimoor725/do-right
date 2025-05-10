import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='w-auto h-auto'>
        <LandingPage/>
    </div>
  )
}

export default page



const LandingPage=()=>{
    return(
        <div className='w-screen h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0'>
                <Image src={"/main/langing.png"} alt='landing' width={1000} height={1000} className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}