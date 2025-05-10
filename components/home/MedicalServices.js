"use client"
import Image from "next/image";
import Link from "next/link";
const MedicalServices = () => {
    return (
        <div id='med' className="w-screen h-screen relative flex items-center justify-center overflow-hidden  bg-[#000202] text-white">
            {/* Background Image */}
            <Image
                src="/main/medical.png"
                alt="armdom-page"
                // layout="fill"
                objectFit="cover"
                width={4000}
                height={4000}
                className="z-0"
            />

            {/* Overlay Content */}
            <div className="absolute right-[10%] z-10 max-w-3xl flex flex-col justify-center items-center text-center  _bg-[red]">
                {/* Logo */}
                <div className='flex justify-center items-end _bg-[red]'>
                    <Image src={'/logo/medical.png'} alt='page-logo' width={400} height={400} className='w-[15rem] object-cover' />
                    <div className='flex flex-col font-normal text-7xl justify-center items-start'>
                        <div>MEDICAL</div>
                        <div>SERVICES</div>
                    </div>
                </div>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    Behind the glamor of every successful start-up are a
                    dozen others that didn’t make it. Building a company is
                    grueling. Sleepless nights, self-doubt, and countless
                    obstacles, are the day-in, day-out reality of committing to
                    this incredibly hard, and in many ways, irrational, journe
                </p>
                <div
                    className="text-xl md:text-2xl font-light text-white/70 leading-relaxed mt-10 px-12 cursor-pointer hover:scale-110 hover:bg-white hover:text-black duration-300 transition-all"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Home
                </div>


                <Link href={"#catring"} className="absolute -left-36 z-10 cursor-pointer hover:scale-115">
                    <Image src={'/icons/left1.svg'} alt='navigation' width={60} height={60} className='w-60 rotate-[180deg] object-cover' />
                </Link>
            </div>



        </div>
    );
};
export default MedicalServices