import React from 'react'
import logo from '@assets/logo/uranusLogoText.png'
import solana from '@assets/chain/solana.jpg'
import Button from '@Common/Button/Button'
import ArrowDown from '@assets/svg/ArrowDown'
import LaunchPad from '@/assets/svg/LaunchPad'
function Header() {
    return (
        <nav className="flex justify-between items-center px-40 py-5 bg-background border-b-[1px] z-20 border-border fixed top-0 w-full text-primary">
            <div className="flex gap-10">
                <div>
                    <img className="w-[10rem]" src={logo} alt="UranusLogo" />
                </div>
            </div>
            <ul className="flex justify-center items-center gap-11">
                <li>
                    <a
                        href="#"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>How It Works</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>RoadMap</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>FAQ</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex justify-center items-center gap-2"
                    >
                        <LaunchPad />
                        <p>Launchpad</p>
                        <ArrowDown />
                    </a>
                </li>
            </ul>
            <div className="flex gap-6">
                {/* <div className='bg-white flex justify-center items-center w-[12rem]  px-2 rounded-full'>
                <div className='flex justify-between items-center gap-10 text-background font-semibold text-base'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-7 h-7 object-cover rounded-full' src={solana} alt="" />
                        <p>Solana</p>
                        <ArrowDown />

                    </div>
                </div>
            </div> */}
                <Button style="primary" width="10rem">
                    Connect Wallet
                </Button>
            </div>
        </nav>
    )
}

export default Header
