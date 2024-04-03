import React from 'react'
import logo from '../../assets/logo/LogoAndText.png'
function CommingSoon() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center gap-10 p-20'>
      <div className='w-48'>
        <img src={logo} alt="" />
      </div>
      <div className='flex flex-col  justify-center items-center'>
        <h1 className='text-8xl font-bold text-[#4185f2]'>URANUS SPACE</h1>
        <p className='text-3xl text-slate-500'>"Next-generation IDO platform solution on Solana"</p>
      </div>
      <div>
        <p className='text-2xl text-slate-500'>Coming Soon...</p>
      </div>
    </div>
  )
}

export default CommingSoon
