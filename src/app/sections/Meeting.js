import React from 'react';

function Meeting() {
  return (
    <div id="what" className='px-[100px] meeting-container'>
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
  );
}

export default Meeting;
