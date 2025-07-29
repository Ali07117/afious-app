import React from 'react';
import WaitlistButton from './WaitlistButton';

function Navbar() {
  return (
    <div className='py-[32px] nav-container bg-[] h-[85px] bg-[] flex justify-between items-center'>
      <img className=' h-[32px] web-logo' src="/images/logo.svg" alt="" />
      <a target='blank' href="https://docs.google.com/forms/d/e/1FAIpQLScl1PE74kCRc6xnztjE4H8qwJuaoReWYvR6hbxPf4pK5Aqs1w/viewform?usp=dialog">
      <WaitlistButton />
      </a>
    </div>
  );
}

export default Navbar;
