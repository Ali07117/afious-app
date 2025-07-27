import React from 'react';

function BottomBar({ open, setopen }) {
  return (
    <div className='fixed bottom-[20px] bottom-bar-container top-[88vh] flex items-center left-[50%] translate-x-[-50%] z-[100] h-[70px] rounded-[16px] border border-[1px] border-[#A6A6A6] bg-[#FFFFFF]  w-[95%]'>

      <div className='w-[70px] bg-[#2AFF39] flex items-center justify-center h-[100%] rounded-l-[15px]'>
        <img className='cursor-pointer h-[40%]' src="/images/baricon.svg" alt="" onClick={() => { setopen(!open) }} />
      </div>
      <div className='h-[100%] flex-1 flex px-[6%] bottom-bar-text-box items-center justify-between'>
        <p className='font-[Inter] font-[800] what-text bottom-bar-text text-[32px] leading-[100%] text-[#A6A6A6]'>What</p>
        <button className='px-[30px] bottom-bar-button-box py-[8px] bottom-bar-text border-[0px] outline-[0px] bg-[#2AFF39] rounded-[40px] font-[notoo] font-[700] text-[32px] text-[#000] leading-[32px]'>How It <span>workss</span></button>
        <p className='font-[Inter] font-[800] faqs-text bottom-bar-text text-[32px] leading-[100%] text-[#A6A6A6]'>FAQs</p>
      </div>
    </div>
  );
}

export default BottomBar;
