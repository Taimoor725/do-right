"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    // Initial animation when the page loads
    gsap.from(".doright", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // ScrollTrigger animation when the elements go out of view and come back into view
    gsap.to(".doright", {
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "back.in(1.7)",
      scrollTrigger: {
        trigger: ".doright", // Trigger animation on these elements
        start: "top 50%", // Start when the top of the element hits the center of the viewport
        end: "bottom top", // End when the bottom of the element reaches the top of the viewport
        scrub: true, // Smooth scroll synchronization
        toggleActions: "restart pause resume reverse", // Ensure the animation replays when the element re-enters the viewport
        markers: false, // Optional, for debugging
      },
    });

    // ScrollTrigger to animate the elements back when they come into view
    gsap.to(".doright", {
      y: -10,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".doright", // Trigger animation on these elements
        start: "top bottom", // Trigger when the top of the element hits the bottom of the viewport
        end: "top center", // End when the top of the element reaches the center of the viewport
        scrub: true, // Smooth scroll synchronization
        toggleActions: "restart pause resume reverse", // Reverse the animation when scrolling back up
        markers: false, // Optional, for debugging
      },
    });
  }, []);

  return (
    <div className="w-screen h-screen relative">
      {/* Background Image */}
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={"/main/landing.png"}
          alt="landing"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-[40%] left-[5%] z-10 text-white flex flex-col items-center">
        <div className="font-bold text-[14rem] overflow-hidden flex">
          <span className="doright"> </span>
          <span className="doright">D</span>
          <span className="doright">O</span>
          <span className="doright">R</span>
          <span className="doright">I</span>
          <span className="doright">G</span>
          <span className="doright">H</span>
          <span className="doright">T</span>
        </div>

        <div
          className="bg-white text-black py-5 px-12 text-2xl font-light cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight * 9, behavior: "smooth" })
          }
        >
          OUR HISTORY
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
