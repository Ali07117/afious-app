'use client'
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function HowItWork() {
    useGSAP(
        () => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".work-container",
              scrub: true,
              pin: true,
              start: "top 0%",
              end: "top -100%", 
              // markers: true,
            }
          });
          
          tl2.to(".work-2", {
           translateY:"-75%"
         }, "a")
           tl2.to(".work-3", {
           translateY:"-175%"
         }, "b")
           tl2.to(".work-4", {
           translateY:"-200%"
         }, "c")
            
        
    
            });

  return (
    <div className='gfds'>

    
    <div className='px-[100px] work-container flex min-h-[100px] work-margin-container mt-[100px]'>
      <div className="w-[40%] bg-[] h-[100%] work-left">
        <h2 className='text-[#A6A6A6]  font-[Inter] font-[800] text-[70px] '>How It Works</h2>
      </div>
      <div className="w-[60%] bg-[] relative work-box work-box-right flex flex-col gap-[35px] h-[100%] right">
        <div className='bg-[#FFFFFF] py-[30px] work-1 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
            <h3 className='text-[#A6A6A6] font-[Lexend] leading-[124%] font-[700] text-[48px]'>Choose What Matters to You</h3>
            <p className='mt-[20px] text-[32px] w-[95%] text-[#000000] leading-[140%] font-[Inter] font-[400]'>Select your college, hometown, and interests — so Afious can connect you with people you’ll actually want to meet.</p>
        </div>
        <div className='bg-[#FFFFFF]  z-[5] py-[30px] work-2 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
            <h3 className='text-[#A6A6A6] font-[Lexend] leading-[124%] font-[700] text-[48px]'>Discover Students Nearby</h3>
            <p className='mt-[20px] text-[32px] w-[95%] text-[#000000] leading-[140%] font-[Inter] font-[400]'>Browse a curated list of students on your campus or from your country who share your vibe — no group invites, no spam.</p>
        </div>
        <div className='bg-[#FFFFFF]  z-[6] py-[30px] work-3 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
            <h3 className='text-[#A6A6A6] font-[Lexend] leading-[124%] font-[700] text-[48px]'>Start a Conversation</h3>
            <p className='mt-[20px] text-[32px] w-[95%] text-[#000000] leading-[140%] font-[Inter] font-[400]'>Say hi with confidence. Shared interests make it easier to chat naturally and skip the awkward intros.</p>
        </div>
        <div className='bg-[#FFFFFF]  z-[7] py-[30px] work-4 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
            <h3 className='text-[#A6A6A6] font-[Lexend] leading-[124%] font-[700] text-[48px]'>Build Your Circle</h3>
            <p className='mt-[20px] text-[32px] w-[95%] text-[#000000] leading-[140%] font-[Inter] font-[400]'>Whether it’s one close friend or your entire crew, keep the convo going — group chats and events make it easy to grow your community.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HowItWork;
