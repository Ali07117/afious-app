import React from 'react';
import WaitlistButton from './WaitlistButton';

function Navbar() {
  return (
    <div className='py-[32px] nav-container bg-[] h-[110px] px-[42px] flex justify-between items-center'>
    <img src="/images/logo.svg" alt="" />
    <WaitlistButton/>
    </div>
  );
}

export default Navbar;
