import React from 'react';
import WaitlistButton from './WaitlistButton';

function Navbar() {
  return (
    <div className='py-[32px] nav-container bg-[] h-[90px] px-[42px] flex justify-between items-center'>
    <img className=' h-[40px] web-logo' src="/images/logo.svg" alt="" />
    <WaitlistButton/>
    </div>
  );
}

export default Navbar;
