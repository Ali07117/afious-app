'use client'
import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import BottomBar from './components/BottomBar';
import HowItWork from './sections/HowItWork';
import Faq from './sections/Faq';
import WaitlistButton from './components/WaitlistButton';
import Meeting from './sections/Meeting';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Contact from './contact/page';
// const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger)
function page() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll();
    }
  }, []);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const pathname = usePathname();
  useGSAP(() => {
    // gsap.set(".slidesline",{scale:10})
    var tl = gsap.timeline({

      scrollTrigger: {
        trigger: ".home",
        // scroller:"body",
        scrub: 2,
        // markers:true,
        start: "top top",
        end: "bottom top",
        pin: true
      }

    })

    tl.to(".white-bar1", {
      opacity: 1,
    }, "1")
    tl.to(".white-bar2", {
      opacity: 1,
    }, "1")
    tl.to(".left-image", {
      // translateY: "-100%",
      opacity: 0,
      duration: 2,
    }, "2")
    tl.to(".right-image", {
      // translateY: "-100%",
      opacity: 0,
      duration: 2,
    }, "2")
    tl.to(".center-image", {
      // translateY: "100%",
      opacity: 0,
      duration: 2,
      // delay: 0,
    }, "2")
    tl.to(".white-bar1", {
      opacity: 0,
    }, "2")
    tl.to(".white-bar2", {
      opacity: 0,
    }, "2")
    tl.to(".hero-text-container-main-2", {
      opacity: 0,
    }, "2")
    tl.to(".hero-text-container-main", {
      opacity: 1,
    }, "2")
    //    ----------craft--------
    var tl2 = gsap.timeline({

      scrollTrigger: {
        trigger: ".craft-section",
        scrub: true,
        start: "top 0%",
        end: "top -150% ",
        pin: true,
      },

    })
    tl2.to(".cards1", {
      // translateX:'-100px',
    }, "a")
    tl2.to(".cards2", {
      // translateY:"10"
      position: "absolute",
      top: "40%"

    }, "b")
    tl2.to(".cards3", {
      position: "absolute",
      top: "80%"
    }, "c")
    tl2.to(".cards4", {
      position: "absolute",
      top: "120%"
    }, "d")

    gsap.to(".craft-section", {
      scrollTrigger: {
        trigger: ".craft-section",
        scrub: 2,
        start: "top 0%",
        end: "top -50%",
      }

    })
    //    ----------craft--------
    // ----------slide-----------
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".cont",
        scrub: 3,
        start: "top 0%",
        end: "top -200% ",
        pin: true
      },
      transform: "translateX(-300%)",
      duration: 2,
    })

    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".cont",
        scrub: 2,
        start: "top 0%",
        end: "top 20%",
      },
      backgroundColor: "#EF9D71",
      duration: 2,
      // ease:Power1,
    })
    gsap.from(".reel-heading", {
      x: -500,
      y: -500,
      duration: 2,
      scrollTrigger: {
        trigger: ".slide",
        // markers:true
      }
    })

    // ----------slide-----------
    // ---------footer-----------
    gsap.from(".ourteam", {

      opacity: 0,
      y: 100,
      // duration:2,
      scrollTrigger: {
        trigger: ".ourteam",
        start: "top 50%",
        scrub: true
      },
    })

    gsap.from(".single", {
      y: 120,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".single",
        scrub: 3,
        // markers:true,
        start: "top 90%",
        end: "top 75%"
      }

    })
    // ---------footer-----------

  })



  return (

    <>
      {/* <Contact open2={open2} setOpen2={setOpen2}/> */}
      <div className={` ${open ? " translate-x-[0%]" : " translate-x-[-200%]"} duration-500 fixed top-0 left-0 w-full h-screen bg-[#FFFFFF] z-[101]`}>
        <div className='flex justify-between nav-cross-container px-[80px] py-[70px]'>
          <div></div>
          <button className='font-[notoo] hover:text-[#2AFF39] duration-500 hover:bg-[#000000] nav-cross  text-[32px] font-[700] text-[#000000] bg-[#2AFF39] rounded-[40px] border-[0px] outline-[0px] px-[30px] py-[0px]' onClick={() => { setOpen(!open) }}>
            Close X
          </button>
        </div>
        <div className='ml-[180px] nav-text-container nav-text-box'>
          <span className='flex items-center gap-[30px] cursor-pointer' >
            <p className='nav-text hidden-section-default-text'><ScrollLink to="what" onClick={() => { setOpen(!open) }} spy smooth activeClass={"hidden-section-default-text2 nav-text"}>What</ScrollLink></p>
            <ScrollLink to="what" onClick={() => { setOpen(!open) }} spy smooth activeClass="active-arrow"> <img className="opacity-0 nav-arrow" src="/images/navarrow.svg" alt="" /></ScrollLink>
          </span>
          <span className='flex items-center gap-[30px] cursor-pointer' >
            <p className='nav-text hidden-section-default-text'><ScrollLink to="how-it-work" onClick={() => { setOpen(!open) }} spy smooth activeClass={"hidden-section-default-text2 nav-text"}>How It Works</ScrollLink></p>
            <ScrollLink to="how-it-work" onClick={() => { setOpen(!open) }} spy smooth activeClass="active-arrow"> <img className="opacity-0 nav-arrow" src="/images/navarrow.svg" alt="" /></ScrollLink>
          </span>
          <span className='flex items-center gap-[30px] cursor-pointer'>
            <p className='nav-text hidden-section-default-text'><ScrollLink to="faq-id" onClick={() => { setOpen(!open) }} spy smooth activeClass={"hidden-section-default-text2 nav-text"}>FAQs</ScrollLink></p>
            <ScrollLink to="faq-id" onClick={() => { setOpen(!open) }} spy smooth activeClass="active-arrow"> <img className="opacity-0 nav-arrow" src="/images/navarrow.svg" alt="" /></ScrollLink>
          </span>
          <span className='flex items-center gap-[30px]'>
            <p className='font-[Inter] nav-text font-[700] text-[70px] text-[#A6A6A6]'>Blog</p>

          </span>
          <Link href="/contact">
            <span className='flex items-center gap-[30px]'>
              <p className={`font-[Inter] nav-text font-[700] text-[70px] text-[#A6A6A6] ${pathname === "/contact" ? 'text-[#A6A6A6]' : ' text-[#000]'} `}>Contact</p>
            </span>
          </Link>
          <button className='text-[#2AFF39] nav-text nav-button font-[Inter] translate-x-[-5%] font-[700] text-[70px] hover:text-[#000000] hover:bg-[#2AFF39]  duration-500 bg-[#000000] rounded-[100px] px-[40px]'>Join the Waitlist</button>
        </div>
      </div>
      <div id='hero' className="main w-full w-[100%] overflow-hidden " >
        {/* <BottomBar open={open} setopen={setOpen} /> */}
        {/* ============== Bottom Bar ============== */}
        <div className='fixed bottom-[20px] bottom-bar-container top-[88vh] flex items-center left-[50%] translate-x-[-50%] z-[100] h-[70px] rounded-[16px] border border-[1px] border-[#A6A6A6] bg-[#FFFFFF]  w-[95%]'>

          <div className='w-[70px] bottom-bar-icon bg-[#2AFF39] flex items-center justify-center h-[100%] rounded-l-[15px]'>
            <img className='cursor-pointer bottom-bar-img h-[40%]' src="/images/baricon.svg" alt="" onClick={() => { setOpen(!open) }} />
          </div>
          <div className='h-[100%] flex-1 flex px-[6%] bottom-bar-text-box items-center justify-between'>
            <p className='bottom-bar-button-box bottom-bar-text link-non-active'><ScrollLink to="what" spy smooth activeClass={"link-active"}>What</ScrollLink></p>
            <p className='bottom-bar-button-box bottom-bar-text link-non-active'><ScrollLink to="how-it-work" spy smooth activeClass={"link-active"}> <span className='work-text-visible'>How It works</span> <span className='work-text-hidden'>Works</span></ScrollLink></p>
            <p className='bottom-bar-button-box bottom-bar-text link-non-active'><ScrollLink to="faq-id" spy smooth offset={300} activeClass={"link-active"}>FAQs</ScrollLink></p>

            {/* <p className='font-[Inter] font-[800] faqs-text bottom-bar-text text-[32px] leading-[100%] text-[#A6A6A6]'>FAQs</p> */}
          </div>
        </div>
        <div className="circle-animation" >
          <div className="home section w-full h-[100vh] relative bg-[white] text-[white]" >

            <Navbar />

            {/* =========== hero section ========= */}
            <Hero />
          </div>
        </div>
        {/* ----------------- What section ------------------- */}
        {/* <Meeting/> */}
        <div name="what" id="" className='px-[100px] duration-500 meeting-container'>
          <div className=' py-[100px] meeting-padding-container meeting-box flex border-b border-b-[1px] border-b-[#A6A6A6]'>
            <div className="meeting-left pt-[3%] w-[50%] bg-[]">
              <h2 className='text-[42px] font-[700] meeting-heading text font-[Lexend] leading-[122%] text-[#A6A6A6]'>Meet People Who Just Get You</h2>
              <p className='font-[Inter] font-[400] meeting-para mt-[60px] text-[32px] text-[#000000] leading-[100%]'>No more awkward intros. Afious connects you with students who share your interests, background, or school — so conversations flow naturally from the start.</p>
            </div>
            <div className="meeting-right w-[50%] flex bg-[] items-center justify-center">
              <img className='meeting-img' src="/images/howitworkgetyou.svg" alt="" />
            </div>

          </div>
          <div className=' py-[100px] meeting-padding-container meeting-box flex border-b border-b-[1px] border-b-[#A6A6A6]'>
            <div className="meeting-left pt-[3%] w-[50%] bg-[]">
              <h2 className='text-[42px] font-[700] meeting-heading font-[Lexend] leading-[122%] text-[#A6A6A6]'>Make a New Place Feel Like Home</h2>
              <p className='font-[Inter]  meeting-para mt-[60px] text-[32px] text-[#000000] leading-[100%]'>Starting over can feel overwhelming. Afious helps you build a support system wherever you are, one real connection at a time.</p>
            </div>
            <div className="meeting-right w-[50%] flex bg-[] items-center justify-center">
              <img className='meeting-img' src="/images/howitworkhome.svg" alt="" />
            </div>

          </div>
          <div className=' py-[100px] meeting-padding-container meeting-box flex border-b border-b-[1px] border-b-[#A6A6A6]'>
            <div className="meeting-left pt-[3%] w-[50%] bg-[]">
              <h2 className='text-[42px] font-[700] meeting-heading font-[Lexend] leading-[122%] text-[#A6A6A6]'>Your Circle Starts Here</h2>
              <p className='font-[Inter]  meeting-para mt-[60px] text-[32px] text-[#000000] leading-[100%]'>Go from “I don’t know anyone” to “These are my people.” Chat 1-on-1 or grow your own crew — all within one welcoming space.</p>
            </div>
            <div className="meeting-right w-[50%] flex bg-[] items-center justify-center">
              <img className='meeting-img' src="/images/howitworkcircle.svg" alt="" />
            </div>

          </div>
        </div>
        <div id='how-it-work' className='' >
          {/* ------------- How it work section start --------------- */}
          <div className='px-[100px] craft-section work-container flex min-h-[100px] bg-[] work-margin-container pt-[100px]'>
            <div className="w-[40%] bg-[] h-[100%] work-left">
              <h2 className='text-[#A6A6A6] work-heading font-[Inter] font-[800] text-[70px] '>How It Works</h2>
            </div>
            <div className="w-[60%] bg-[] relative work-box work-box-right flex flex-col gap-[3%] h-[100%] right">
              <div className='bg-[#FFFFFF] cards1 card-box py-[30px] work-1 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
                <h3 className='text-[#A6A6A6] font-[Lexend] work-card-heading leading-[124%] font-[700] text-[48px]'>Choose What Matters to You</h3>
                <p className='mt-[20px] text-[32px] w-[95%] work-card-para text-[#000000] leading-[140%] font-[Inter] font-[400]'>Select your college, hometown, and interests — so Afious can connect you with people you’ll actually want to meet.</p>
              </div>
              <div className='bg-[#FFFFFF] absolute top-[110%]  cards2 z-[5] card-box py-[30px]   px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
                <h3 className='text-[#A6A6A6] font-[Lexend] work-card-heading  leading-[124%] font-[700] text-[48px]'>Discover Students <span className='nearby'>Nearby</span></h3>
                <p className='mt-[20px] text-[32px] w-[95%] work-card-para text-[#000000] leading-[140%] font-[Inter] font-[400]'>Browse a curated list of students on your campus or from your country who share your vibe — no group invites, no spam.</p>
              </div>
              <div className='bg-[#FFFFFF] absolute top-[220%] z-[6] cards3 card-box py-[30px] work-3 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
                <h3 className='text-[#A6A6A6] font-[Lexend] work-card-heading leading-[124%] font-[700] text-[48px]'>Start a Conversation</h3>
                <p className='mt-[20px] text-[32px] w-[95%] work-card-para text-[#000000] leading-[140%] font-[Inter] font-[400]'>Say hi with confidence. Shared interests make it easier to chat naturally and skip the awkward intros.</p>
              </div>
              <div className='bg-[#FFFFFF] absolute top-[330%] z-[7] cards4 card-box py-[30px] work-4 px-[35px] border border-[1px] border-[#A6A6A6] rounded-[16px]'>
                <h3 className='text-[#A6A6A6] font-[Lexend] work-card-heading leading-[124%] font-[700] text-[48px]'>Build Your Circle</h3>
                <p className='mt-[20px] text-[32px] w-[95%] work-card-para text-[#000000] leading-[140%] font-[Inter] font-[400]'>Whether it’s one close friend or your entire crew, keep the convo going — group chats and events make it easy to grow your community.</p>
              </div>
            </div>
          </div>
        </div>
        {/* ================= Faq section ============= */}
        <div id='faq-id'>
          <Faq />
        </div>
        {/* ================= Faq section ============= */}
        <div className=' px-[100px] bottom-button-box pt-[100px] pb-[120px] '>
          <WaitlistButton />
        </div>
      </div>

    </>
  );
}

export default page;
