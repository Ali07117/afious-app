import React from 'react';
import WaitlistButton from '../components/WaitlistButton';
import Link from 'next/link';

function contact() {
  return (
    <>
      <div id='contact' className={` duration-500 contact-wrapper px-[4.5rem] bg-[white]   w-full overflow-scroll min-h-[10px] z-[9999999] w-[100vw]  py-[10rem]`} >
      <Link href="/">
        <button className='font-[notoo] absolute top-[4rem] contact-back-button left-[4.5rem] flex items-center gap-[3px] duration-500  nav-cross  text-[24px] font-[700] text-[#000000] bg-[#2AFF39] rounded-[40px] border-[0px] outline-[0px] px-[24px] py-[0px]'>
          <img className='h-[15px] rotate-[-180deg] contact-back-button-img' src="/images/navarrow.svg" alt="" />
          back
        </button>
      </Link>
        <div className='flex contact-inner-wrapper gap-[8rem]'>
          <div className="contact-wrapper-left w-[50%]  z-[5] ">
            <p className=" font-noto font-[700] contact-headings text-[2vw] leading-[5vw]  text-[#A6A6A6]">Let’s work together</p>
            <p className=" font-[Inter] font-[400] contact-sub-heading leading-[3rem] text-[2rem] mt-[1.5rem] text-[--textprimary]">Ready to bring your vision to life? We're excited to hear about your project!</p>
            <p className='font-[Inter] text-[20px]  contact-para mt-[1rem] text-[--textprimary] font-[400]'>Whether you're looking to refine an existing product, or develop a full product ecosystem, we're here to bring your vision to life.</p>
          </div>
          {/* <form ></form> */}
          <form
            action="https://formspree.io/f/xyzypdbz"
            method="POST"
            className="contact-wrapper-right w-[50%]  z-[5] ">
            <div className="input-box flex flex-col gap-[0.5rem] w-[100%] w-[100%]">
              <label className='text-[--textprimary] font-[Inter] font-[300] text-[16px]' htmlFor="name">Name</label>
              <input className='border-[2px] border-[#A6A6A6] w-[100%] text-[--textprimary] px-[0.5rem] outline-none h-[4.5rem] bg-transparent rounded-[0.5rem]' id='name' name='name' type="text" required />
            </div>
            <div className="input-box flex flex-col gap-[0.5rem] mt-[3rem] w-[100%]">
              <label className='text-[--textprimary] font-[Inter] font-[300] text-[16px]' htmlFor="email">Email Address</label>
              <input className='border-[2px] border-[#A6A6A6] w-[100%] text-[--textprimary] px-[0.5rem] h-[4.5rem] outline-none bg-transparent rounded-[0.5rem]' id='email' name='email' type="email" required />
            </div>
            <div className="input-box flex flex-col gap-[0.5rem] mt-[3rem] w-[100%]">
              <label className='text-[--textprimary] font-[Inter] font-[300] text-[16px]' htmlFor="message">Project details</label>
              <textarea className='border-[2px] rounded-[0.5rem] w-[100%] text-[--textprimary] p-[0.5rem] bg-[transparent] resize-none border-[#A6A6A6] h-[11rem] outline-none' id='message' name="message" required ></textarea>
            </div>
            {/* ------------------ */}
            <div className='mt-[60px]'>
              <button className='font-[Inter] contact-button hover:text-[#000000] hover:bg-[#2AFF39]  duration-500 wait-list-button font-[500] text-[18px] rounded-[40px] py-[10px] px-[25px] leading-[32px] bg-[#000000] text-[#2AFF39]'>
                Submit
              </button>
              {/* <WaitlistButton /> */}
            </div>
            {/* ---------------------- */}
          </form>
        </div>
      </div>
    </>
  );
}

export default contact;
