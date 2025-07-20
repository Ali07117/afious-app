'use client'
import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import BottomBar from './components/BottomBar';
import HowItWork from './sections/HowItWork';
import Faq from './sections/Faq';
import WaitlistButton from './components/WaitlistButton';
import Meeting from './sections/Meeting';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
// const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger)
function page() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll();
    }
  }, []);
  const [open, setOpen] = useState(false);
  useGSAP(
    () => {

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainn",
          scrub: true,
          pin: true,
          // markers:true,
          start: "top 0%", // when the ".anime-right" hits the top of the viewport
            end: "top -180%",
        }
      });
  
      tl.to(".white-bar1", {
        opacity: 1,
      }, "1")
      tl.to(".white-bar2", {
        opacity: 1,
      }, "1")
      tl.to(".left-image", {
        translateY: "-100%",
        duration: 2,
      }, "2")
      tl.to(".right-image", {
        translateY: "-100%",
        duration: 2,
      }, "2")
      tl.to(".center-image", {
        translateY: "100%",
        // delay: 0,
      }, "3")
      tl.to(".white-bar1", {
        opacity: 0,
      }, "4")
      tl.to(".white-bar2", {
        opacity: 0,
      }, "4")
      tl.to(".hero-text-container-main-2", {
        opacity: 0,
      }, "4")
      tl.to(".hero-text-container-main", {
        opacity: 1,
      }, "5")

    


    });

    
  return (
    
    <>
 

    
      <div className=' mainn relative min-h-[100vh]'>
      {/* ------------- */}
      <div className={` ${open ? " translate-x-[0%]" : " translate-x-[-100%]"} duration-500 fixed top-0 left-0 w-full h-screen bg-[#FFFFFF] z-[101]`}>
      <div className='flex justify-between px-[80px] py-[70px]'>
      <div></div>
        <button className='font-[notoo] text-[32px] font-[700] text-[#000000] bg-[#2AFF39] rounded-[40px] border-[0px] outline-[0px] px-[30px] py-[0px]' onClick={()=>{setOpen(!open)}}>
          Close X
        </button>
      </div>
      <div className='ml-[180px]'>
      <span className='flex itrms-center gap-[80px]'>
        <p className='font-[Inter] font-[700] text-[70px] text-[#A6A6A6]'>What</p>
        {/* <img src="/images/navarrow.svg" alt="" /> */}
      </span>
      <span className='flex itrms-center gap-[80px]'>
        <p className='font-[Inter] font-[700] text-[70px] text-[#000000]'>How It Works</p>
        <img src="/images/navarrow.svg" alt="" />
      </span>
      <span className='flex itrms-center gap-[80px]'>
        <p className='font-[Inter] font-[700] text-[70px] text-[#A6A6A6]'>FAQs</p>
        {/* <img src="/images/navarrow.svg" alt="" /> */}
      </span>
      <span className='flex itrms-center gap-[80px]'>
        <p className='font-[Inter] font-[700] text-[70px] text-[#A6A6A6]'>Blog</p>
        {/* <img src="/images/navarrow.svg" alt="" /> */}
      </span>
      <span className='flex itrms-center gap-[80px]'>
        <p className='font-[Inter] font-[700] text-[70px] text-[#A6A6A6]'>Contact</p>
        {/* <img src="/images/navarrow.svg" alt="" /> */}
      </span>
      <button className='text-[#2AFF39] font-[Inter] translate-x-[-5%] font-[700] text-[70px] bg-[#000000] rounded-[100px] px-[40px]'>Join the Waitlist</button>
      </div>
      </div>
      {/* ------------- */}
      <BottomBar open={open} setopen={setOpen} />
        <Navbar/>
        <Hero/>
        <Meeting/>
        <HowItWork/>
        <Faq/>
        <div className=' px-[100px] pt-[100px] pb-[35px] '>
        <WaitlistButton/>
        </div>
      </div>
  
    </>
  );
}

export default page;
