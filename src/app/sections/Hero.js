import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';
import BottomBar from '../components/BottomBar';

function Hero() {
    
    useGSAP(() => {
        
      }, []);
  return (
     <div
      className=' h-[calc(98vh-110px)] bg-[] relative hero-main-container w-[100%] flex items-cennter justify-center'
    >
    
    <div className='hero-text-container-main opacity-[0] absolute top-[15%] left-[3%] z-[-1'>
      <p className='font-[Inter] font-[700] text-[212px] text-image leading-[98%]'>Find your crew</p>
      <p className='font-[Lexend] font-[700] text-[48px] mt-[40px]  leading-[124%] text-[#A6A6A6]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
    </div>
    <div className='hero-text-container-main-2 text-container absolute top-[15%] left-[3%] z-[11]'>
      <p className='font-[Inter] font-[700] text-[212px] leading-[98%] text-[#FFFFFF]'>Find your crew</p>
      <p className='font-[Lexend] font-[700] text-[48px] mt-[40px]  leading-[124%] text-[#FFFFFF]'>Meet people who get you — from your school, your city, or halfway across the world. Afious helps international students connect through shared interests, hometowns, and campus life</p>
    </div>
    {/* <p className='text-[50px] font-bold absolute top-[200px] left-[300px] text-[white] z-[99]'>FFFFF</p> */}
    <div className='relative ffdd flex overflow-hidden h-[100%] w-[98%]'>
    
    {/* <img className='rounded-[20px] w-[100%] hero-img opacity-[1] z-[] h-[100%] w-[100%]  object-cover' src="/images/full-hero.svg" alt="" /> */}
    <div className='h-[100%] w-[10px] bg-[#FFFFFF] z-[99] white-bar1 opacity-[0] absolute top-[0px] left-1/3  '></div>
    <div className='h-[100%] w-[10px] bg-[#FFFFFF] z-[99] white-bar2 opacity-[0] absolute top-[0px] right-1/3 '></div>
    <div className='w-[100%] h-[100%] absolute flex'>
    <div className='w-1/3 h-[100%] left-image'>
    <img
      className='object-cover rounded-l-[20px] h-[100%] w-[100%]'
      src="/images/heroimg1.svg"
      alt=""
    />
  </div>
  
  <div className='w-1/3 h-[100%] opacity-[] center-image'>
    <img
      className='object-cover h-[100%] w-[100%]'
      src="/images/heroimg2.svg"
      alt=""
    />
  </div>
  
  <div className='w-1/3 h-[100%] right-image'>
    <img
      className='object-cover rounded-r-[20px] h-[100%] w-[100%]'
      src="/images/heroimg3.svg"
      alt=""
    />
  </div>
    </div>
    </div>
    {/* <div className='mainnn'>
    <p>ddd</p>
    </div> */}
    </div>
  );
}

export default Hero;
