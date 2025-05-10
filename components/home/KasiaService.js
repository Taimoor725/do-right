import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function KasiaService() {
    return (
        <div className='w-auto h-auto'>
            <Coffee />
            <Catring />
        </div>
    )
}

export default KasiaService




const Coffee = () => {
    return (
        <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden text-white" id='coffee'>
            {/* Background Image */}
            <Image
                src="/main/coffee.png"
                alt="kasia-coffee"
                // layout="fill"
                objectFit="cover"
                width={4000}
                height={4000}
                className="z-0"
            />

            {/* Overlay Content */}
            <div className="absolute right-[10%] z-10 max-w-3xl flex flex-col justify-center items-center text-center  _bg-[red]">
                {/* Logo */}
                <div className='flex flex-col gap-10'>
                    <Image src={'/logo/kasia.png'} alt='page-logo' width={400} height={400} className='w-[25rem] object-cover' />
                    <div className='text-6xl font-bold'>COFFEE</div>
                </div>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-20 px-12">
                    Kasia supplies a full range of coffee solutions, from premium beans and machines to accessories and cleaning products. Their mobile coffee cart, CELINE, offers a vibrant on-the-go coffee experience, bringing expertly brewed cups to different events and locations.
                </p>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    With a focus on fresh aroma, quality craftsmanship, and sleek presentation, Kasia elevates everyday coffee moments. They serve hotels, coffee shops, retail stores, and corporate clients across Saudi Arabia. Their mission is to craft memorable coffee experiences that blend convenience with authentic flavor
                </p>
            </div>


            <Link href={'#catring'} className="absolute right-20 z-10 cursor-pointer ">
                <Image src={'/icons/left.svg'} alt='navigation' width={60} height={60} className='w-60 object-cover fill-[#2A1C00] hover:scale-115' />
            </Link>
        </div>
    );
};



const Catring = () => {
    return (
        <div className='w-screen h-screen relative' id='catring'>
            <div className='absolute w-full h-full top-0 left-0'>
                <Image src={'/main/catring.png'} alt='eventcom-page' width={4000} height={4000} className='w-full h-full object-cover' />
            </div>

            {/* text area */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10 max-w-3xl flex flex-col justify-center items-center text-center  _bg-[red]">
                {/* Logo */}
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-10'>
                        <Image src={'/logo/kasia.png'} alt='page-logo' width={400} height={400} className='w-[25rem] object-cover' />
                        <div className='text-6xl font-bold text-white'> CATERING</div>
                    </div>
                    <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-20 px-12">
                        Kasia specializes in food consultancy and catering, providing
                        high-quality products and tailored services for corporate and
                        private events. Their catering solutions include corporate meals,
                        mobile catering for festivals and outdoor events, and custom
                        ervices for exhibitions and receptions
                    </p>
                    <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                        They emphasize operational excellence, flexibility, and customer
                        satisfaction, delivering consistently outstanding culinary experiences.
                        Crepe stations under "Celina" bring live European-style dessert
                        performances to weddings and gatherings. Kasia’s catering mission is
                        to enhance every occasion with excellence, flavor, and professionalism
                    </p>
                    <div className='text-sm md:text-2xl font-light text-white/70 leading-relaxed mt-10 px-12'>
                         HOME . KASIA
                    </div>
                </div>

                {/* right arrows */}
                <Link href={'#med'} className="absolute -right-32 z-10 cursor-pointer ">
                    <Image src={'/icons/left.svg'} alt='navigation' width={60} height={60} className='w-60 object-cover hover:scale-115' />
                </Link>

                {/* left arrow */}
                <Link href={"#coffee"} className="absolute -left-32 z-10 cursor-pointer">
                    <Image src={'/icons/left.svg'} alt='navigation' width={60} height={60} className='w-60 rotate-[180deg] object-cover hover:scale-115' />
                </Link>

            </div>
        </div>
    )
}