"use client"
import React, { use, useEffect, useRef } from 'react'
import Image from 'next/image'
import NavBar from '@/components/comman/NavBar'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import KasiaService from '@/components/home/KasiaService';
import Link from 'next/link';
import MedicalServices from '@/components/home/MedicalServices';
import LandingPage from '@/components/home/LandingPage';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

function page() {
    return (
        <div className='w-auto h-auto relative overflow-x-hidden bg-black'>
            <NavBar />
            <LandingPage />
            <Partner />
            <ArmdomPage />
            <EventcomPage />
            <PromPage />
            <KasiaPage />
            <KasiaService />
            <MedicalServices />
            <History />
        </div>
    )
}

export default page





const Partner = () => {
    const bgRef = useRef(null);
    const mainLogoRef = useRef(null);
    const subLogosRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                toggleActions: "restart pause resume reverse",
            },
        });

        tl.from(bgRef.current, {
            x: "-100%",
            duration: 1,
            opacity: 0,
            ease: "power3.out",
        })
            .from(
                ".mainLog",
                {
                    opacity: 0,
                    y: 200,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "<" // starts at the same time as previous animation ends (or use "<0" for exact same frame)
            )
            .from(
                subLogosRef.current,
                {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "<"
            );
    }, []);


    return (
        <div
            ref={containerRef}
            className="w-screen h-screen flex relative mainscreen overflow-hidden"
        >
            {/* Background Image */}
            <div className="flex w-full h-full" ref={bgRef}>
                <Image
                    src="/main/partnerPage.png"
                    width={4000}
                    height={4000}
                    alt="partnerpage"
                    className="w-full h-full object-cover backG"
                />
            </div>

            {/* Logos Section */}
            <div className="absolute flex flex-col gap-20 top-[25%] right-[5%] w-auto">
                {/* Main Logo */}
                <div
                    className="flex justify-center items-center overflow-hidden"
                >
                    <Image
                        src="/logo/mainLogo.png"
                        alt="logo1"
                        width={400}
                        height={400}
                        className="w-[35rem] object-cover mainLog"
                    />
                </div>

                {/* Sub Logos */}
                <div
                    className="flex w-full justify-center items-center gap-20 overflow-hidden"
                    ref={subLogosRef}
                >
                    <div>
                        <Image
                            src="/logo/armdom.png"
                            alt="logo2"
                            width={400}
                            height={400}
                            className="w-[25rem] object-cover subLogo"
                        />
                    </div>
                    <div>
                        <Image
                            src="/logo/eventcom.png"
                            alt="logo3"
                            width={400}
                            height={400}
                            className="w-[25rem] mt-3 object-cover subLogo"
                        />
                    </div>
                    <div>
                        <Image
                            src="/logo/prom.png"
                            alt="logo4"
                            width={400}
                            height={400}
                            className="w-[20rem] object-cover subLogo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};




const ArmdomPage = () => {
    const armref = useRef()
    useEffect(() => {
        gsap.to(".armMian", {
            x: 0,
            duration: 0.5,
            opacity: 1,
            ease: "power1",
            scrollTrigger: {
                trigger: armref.current,
                start: "top 50%",
                toggleActions: "restart pause resume reverse",


            }
        })
    }, [])


    return (
        <div ref={armref} className="w-screen h-screen relative flex items-center justify-center overflow-hidden text-white" id='armdomPage'>
            {/* Background Image */}
            <Image
                src="/main/armdom.png"
                alt="armdom-page"
                // layout="fill"
                objectFit="cover"
                width={4000}
                height={4000}
                className="z-0"
            />

            {/* Overlay Content */}
            <div className="absolute right-[10%] z-10 max-w-3xl flex flex-col justify-center items-center text-center  _bg-[red] armMian opacity-0 translate-x-200">
                {/* Logo */}
                <div className=''>
                    <Image src={'/logo/armdom.png'} alt='page-logo' width={400} height={400} className='w-[30rem] object-cover' />
                </div>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    ARMCOM is a boutique media buying and planning agency with offices in Riyadh and Lebanon, offering strategic and innovative marketing solutions. They combine diverse expertise to create integrated campaigns across TV, outdoor, online, and events.
                </p>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    Their services include market analysis, media planning, PR strategies, guest management, and video production. ARMCOM also specializes in campaign monitoring, optimization, and tailored brand experiences. Their philosophy is doing what they love: building stories that deeply engage and deliver results.
                </p>
            </div>


            <Link href={'#eventcomPage'} className="absolute right-20 z-10 cursor-pointer hover:scale-115">
                <Image src={'/icons/sortLeft.png'} alt='navigation' width={60} height={60} className='w-32 rotate-[180deg] object-cover' />
            </Link>
        </div>
    );
};

const EventcomPage = () => {
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const logoAreaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play reverse play reverse",
            },
        });

        tl.from(".backEvenCom", {
            y: "60%",
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }).from(
            logoAreaRef.current,
            {
                x: "-100%",
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            },
            "<"
        );
    }, []);

    return (
        <div ref={containerRef} className='w-screen h-screen relative' id='eventcomPage'>
            <div className='absolute w-full h-full top-0 left-0'>
                <Image
                    src={'/main/eventcomPage.png'}
                    alt='eventcom-page'
                    width={4000}
                    height={4000}
                    className='w-full h-full object-cover backEvenCom'
                />
            </div>

            {/* text area */}
            <div
                ref={logoAreaRef}
                className="absolute left-[10%] top-1/2 -translate-y-1/2 z-10 max-w-3xl flex flex-col justify-center items-center text-center logoArea"
            >
                {/* Logo */}
                <div>
                    <Image
                        src={'/logo/eventcom.png'}
                        alt='page-logo'
                        width={400}
                        height={400}
                        className='w-[30rem] object-cover'
                    />
                </div>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    Event Com is a creative event management agency that crafts unforgettable experiences through innovation, collaboration, and flawless execution. They deliver corporate, governmental, social, luxury, and experiential events with precision and creativity
                </p>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    Their services include event management, entertainment, virtual events, drone shows, 3D design, AV systems, PR, and marketing management. With a passion for innovation and attention to detail, they turn imagination into impactful realities. Event Com ensures every event is immersive, engaging, and leaves a lasting impression
                </p>

                {/* right arrow */}
                <Link href={"#PromPage"} className="absolute -right-24 z-10 cursor-pointer hover:scale-115">
                    <Image
                        src={'/icons/sortLeft.png'}
                        alt='navigation'
                        width={60}
                        height={60}
                        className='w-32 rotate-[180deg] object-cover'
                    />
                </Link>

                {/* left arrow */}
                <Link href={"#armdomPage"} className="absolute -left-24 z-10 cursor-pointer hover:scale-115">
                    <Image
                        src={'/icons/sortLeft.png'}
                        alt='navigation'
                        width={60}
                        height={60}
                        className='w-32 object-cover'
                    />
                </Link>
            </div>
        </div>
    );
};

const PromPage = () => {
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const logoAreaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play reverse play reverse",
            },
        });

        tl.from(bgRef.current, {
            y: "-100%",
            duration: 1,
            ease: "power3.out",
        }).from(
            logoAreaRef.current,
            {
                x: "100%",
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            },
            "<"
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-screen h-screen relative flex items-center justify-center overflow-hidden text-white z-10"
            id="PromPage"
        >
            {/* Background Image */}
            <div ref={bgRef} className="absolute w-full h-full top-0 left-0 z-0">
                <Image
                    src="/main/promPage.png"
                    alt="prom-page"
                    width={4000}
                    height={4000}
                    className="w-full h-full object-cover backProm"
                />
            </div>

            {/* Overlay Content */}
            <div
                ref={logoAreaRef}
                className="absolute right-[10%] z-10 max-w-3xl flex flex-col justify-center items-center text-center logoAreaProm"
            >
                {/* Logo */}
                <div>
                    <Image
                        src={"/logo/prom.png"}
                        alt="page-logo"
                        width={400}
                        height={400}
                        className="w-[30rem] object-cover"
                    />
                </div>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    Promodirect is a production company providing traditional and contemporary advertising solutions across the Arab region. They specialize in brand activation, event planning, exhibition stand production, BTL material distribution, and targeted campaigns.
                </p>
                <p className="text-sm md:text-xl font-light text-white/70 leading-relaxed mt-10 px-12">
                    With over 15 years of experience, they deliver innovative, cost-effective services that engage audiences. Their strategies include leveraging beauty salons for female consumer reach and introducing mobile mupis for dynamic outdoor advertising. Promodirect focuses on building customer loyalty, boosting sales, and achieving measurable growth.
                </p>

                <Link
                    href={"#eventcomPage"}
                    className="absolute -left-20 z-10 cursor-pointer hover:scale-115"
                >
                    <Image
                        src={"/icons/sortLeft.png"}
                        alt="navigation"
                        width={60}
                        height={60}
                        className="w-32 object-cover"
                    />
                </Link>
            </div>
        </div>
    );
};

const KasiaPage = () => {
    const Kasiaref = useRef()
    useEffect(() => {
        gsap.to(".kasiaLogo", {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
                trigger: Kasiaref.current,
                start: "top 60%",
                toggleActions: "play reverse play reverse",
            }
        })
    })
    return (
        <div className='w-screen h-screen relative' ref={Kasiaref}>
            <div className='w-full h-full'>
                <Image src={'/main/kasia.png'} width={4000} height={4000} alt='kasia-page' className='h-screen object-fill' />
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 right-[10%] flex flex-col gap-20'>
                <div className=' overflow-hidden'>
                <Image src={'/logo/kasia.png'} alt='kasia-logo' width={400} height={400} className='w-[50rem] h-auto object-cover z-[10] opacity-0 translate-y-100 kasiaLogo' /></div>
                <div className='flex text-5xl font-bold text-white justify-evenly gap-32'>
                    <div>COFFEE</div>
                    <div>CATERING</div>
                </div>
            </div>
        </div>
    )
}



const History = () => {
    return (
        <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden text-white">
            {/* Background Image */}
            <Image
                src="/main/history.png"
                alt="history-page"
                // layout="fill"
                objectFit="cover"
                width={4000}
                height={4000}
                className="z-0"
            />

            {/* Overlay Content */}
            <div className="absolute right-[10%] z-10 max-w-3xl flex flex-col justify-center items-center text-center  _bg-[red]">
                {/* Logo */}
                {/* <div className='flex justify-start text-5xl bg-[red]'>
                    
                </div> */}
                <div className="text-sm md:text-xl font-light text-white/70 leading-relaxed text-start mt-10 px-12 flex flex-col gap-8">
                    <span className='text-5xl text-white'>Our History</span>
                    Behind the glamor of every successful start-up are a dozen
                    others that didn’t make it. Building a company is grueling.
                    Sleepless nights, self-doubt, and countless obstacles, are the
                    day-in, day-out reality of committing to this incredibly hard,
                    and in many ways, irrational, journey
                </div>
                <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed mt-10 text-start px-12">
                    Some days you’ve got it all figured out, and others you’re
                    questioning everything. Some days people understand your
                    vision and others, you’re met with only naysayers. There isn’t a
                    routine, there isn’t a safety net. But there is a common
                    denominator, willpower.

                </p>
            </div>
        </div>
    );
};