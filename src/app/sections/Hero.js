"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';
// import { useEffect } from "react";
import BottomBar from '../components/BottomBar';

function Hero() {

  useEffect(() => {
    const wrapper = document.querySelector(".hero-wrapper");
    if (!wrapper) return;
  
    const handleParallax = (e) => {
      const { width, height, left, top } = wrapper.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
  
      // Only run when cursor is inside wrapper
      if (
        e.clientX < left ||
        e.clientX > left + width ||
        e.clientY < top ||
        e.clientY > top + height
      ) {
        return;
      }
  
      const moveX = x * 10;
      const moveY = y * 10;
  
      const images = document.querySelectorAll(".hero-visible img");
  
      images.forEach((el, index) => {
        let speedFactor = 1; // default (same as moveX/moveY)
  
        // custom speeds
        if (index === 1) speedFactor = 0.5; // center one slower
        if (index === 0) speedFactor = 0.8; // left one medium
        if (index === 2) speedFactor = 0.8; // right one medium
  
        el.style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px)`;
      });
  
      // text movement (slower, subtle)
      const text = document.querySelector(".hero-text-container-main-2");
      if (text) {
        text.style.transform = `translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
      }
    };
  
    wrapper.addEventListener("mousemove", handleParallax);
  
    return () => wrapper.removeEventListener("mousemove", handleParallax);
  }, []);
  return (
    <div
      className=' h-[calc(100vh-90px)] bg-[] relative hero-wrapper hero-main-container w-[100%] flex items-cennter justify-center'
    >

      <div className='hero-text-container-main opacity-[1] absolute top-[15%] px-[3vw] z-[-1]'>
        <p className='font-[Inter] font-[700] hero-heading text-[12vw] text-image leading-[98%]'>Find your crew</p>
        <p className='font-[Lexend] font-[700] hero-para text-[2.8vw] mt-[40px]  leading-[124%] text-[#A6A6A6]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
      </div>
      <div className='hero-text-container-main-2 -hidden-hero text-container absolute top-[15%] px-[3vw] z-[11]'>
        <p className='font-[Inter] font-[700] hero-heading text-[12vw] leading-[98%] text-[#FFFFFF]'>Find your crew</p>
        <p className='font-[Lexend] font-[700] hero-para text-[2.8vw] mt-[40px]  leading-[124%] text-[#FFFFFF]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
      </div>
      
      {/* <p className='text-[50px] font-bold absolute top-[200px] left-[300px] text-[white] z-[99]'>FFFFF</p> */}
      <div className='relative ffdd flex mobile-hero-container overflow-hidden h-[100%] w-[100%]'>
      {/* <div className='h-[100%] overflow-hidden left-0 flex justify-center w-1/3 z-[98]'>
        <div className='h-[100%] ffgg translate-x-[-110%]  w-[50%] bg-[white] '></div>        
        <div className='h-[100%] ffgg translate-x-[110%] w-[50%] bg-[white] '></div>        
      </div>
      <div className='h-[100%] overflow-hidden absolute left-1/3 flex bg-transparent justify-center w-1/3 z-[98]'>
        <div className='h-[100%] ffgg translate-x-[-110%] w-[50%] bg-[white] '></div>
        <div className='h-[100%] ffgg translate-x-[110%] w-[50%] bg-[white] '></div>
      </div>
      <div className='h-[100%] overflow-hidden absolute left-2/3 flex bg-transparent justify-center w-1/3 z-[98]'>
        <div className='h-[100%] ffgg translate-x-[-110%] w-[50%] bg-[white] '></div>
        <div className='h-[100%] ffgg translate-x-[110%] w-[50%] bg-[white] '></div>
      </div> */}

        {/* <img className='rounded-[20px] w-[100%] hero-img opacity-[1] z-[] h-[100%] w-[100%]  object-cover' src="/images/full-hero.svg" alt="" /> */}
        <div className='h-[100%] w-[0px] bg-[#FFFFFF] z-[99] white-bar1 opacity-[0] absolute top-[0px] left-1/3  '></div>
        <div className='h-[100%] w-[0px] bg-[#FFFFFF] z-[99] white-bar2 opacity-[0] absolute top-[0px] right-1/3 '></div>
        <div className='w-[100%] h-[100%] absolute flex'>
          <div className='w-[100%] center-image  h-[100%]'>
            <img
              className='object-cover rounded-[20px] hero-image-new h-[100%] w-[100%]'
              src="/images/full-hero.svg"
              alt=""
            />
          </div>
          {/* <div className='w-1/3 relative h-[100%] hero-visible left-image overflow-hidden'> */}
          {/* <div className='hero-text-container-main-2 text-container absolute top-[15%] w-[100vw] px-[3vw] bg-[] z-[11]'>
        <p className='font-[Inter] font-[700] hero-heading text-[12vw] leading-[98%] text-[#FFFFFF]'>Find your crew</p>
        <p className='font-[Lexend] font-[700] hero-para text-[2.8vw] mt-[40px]  leading-[124%] text-[#FFFFFF]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
      </div> */}
            {/* <img
              className='object-cover rounded-l-[20px] h-[100%] w-[100%]'
              src="/images/heroimg1.svg"
              alt=""
            />
          </div> */}

          {/* <div className='w-1/3 relative overflow-hidden h-[100%] hero-visible opacity-[] center-image'> */}
          {/* <div className='hero-text-container-main-2 text-container absolute top-[15%] translate-x-[-32.35vw] w-[100vw] px-[3vw] z-[11]'>
        <p className='font-[Inter] font-[700] hero-heading text-[12vw] leading-[98%] text-[#FFFFFF]'>Find your crew</p>
        <p className='font-[Lexend] font-[700] hero-para text-[2.8vw] mt-[40px]  leading-[124%] text-[#FFFFFF]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
      </div> */}
            {/* <img
              className='object-cover h-[100%] w-[100%]'
              src="/images/heroimg2.svg"
              alt=""
            />
          </div> */}

          {/* <div className='w-1/3 h-[100%] hero-visible right-image relative overflow-hidden'> */}
          {/* <div className='hero-text-container-main-2 text-container absolute top-[15%] translate-x-[-64.8vw] w-[100vw] px-[3vw] z-[11]'>
        <p className='font-[Inter] font-[700] hero-heading text-[12vw] leading-[98%] text-[#FFFFFF]'>Find your crew</p>
        <p className='font-[Lexend] font-[700] hero-para text-[2.8vw] mt-[40px]  leading-[124%] text-[#FFFFFF]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
      </div> */}
            {/* <img
              className='object-cover rounded-r-[20px] h-[100%] w-[100%]'
              src="/images/heroimg3.svg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
