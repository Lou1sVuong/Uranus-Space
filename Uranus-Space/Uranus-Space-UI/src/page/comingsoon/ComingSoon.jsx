"use client"
import React from 'react';
import logo from '../../assets/logo/LogoAndText.png';
import { ReactTyped } from "react-typed";

function ComingSoon() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-20'>
      <div className='w-48'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-bold text-[#4185f2]'>URANUS SPACE</h1>
        {/* Next-generation IDO platform solution on Solana */}
        <h4 className='text-3xl text-slate-500'>
        <ReactTyped
    strings={[
      "Next-generation IDO platform solution on Solana",
    ]}
    typeSpeed={100}
    backSpeed={100}
    loop
  />
        </h4>
      </div>
      <div>
        <p className='  text-2xl text-slate-500'>Coming Soon...</p>
      </div>
    </div>
  );
}

export default ComingSoon;
