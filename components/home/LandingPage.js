"use client"
import Image from "next/image"

const LandingPage = () => {
    return (
        <div className='w-screen h-screen relative'>
            <div className='w-full h-full absolute top-0 left-0'>
                <Image src={"/main/landing.png"} alt='landing' width={2000} height={2000} className='w-full h-full object-cover' />
            </div>

            <div className='w-auto absolute top-[40%] left-[5%] h-auto flex flex-col z-10 text-white justify-center items-center'>
                <div className='font-bold text-[14rem]'>
                    DORIGHT
                </div>
                <div
                    className="bg-white text-black py-5 px-12 text-2xl font-light flex justify-center items-center cursor-pointer hover:bg-black hover:text-white"
                    onClick={() => window.scrollTo({ top: window.innerHeight*9, behavior: 'smooth' })}
                >
                    OUR HISTORY
                </div>

            </div>
        </div>
    )
}
export default LandingPage