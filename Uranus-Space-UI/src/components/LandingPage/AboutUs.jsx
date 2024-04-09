import React from 'react'
import UranusLogo from '@/assets/logo/uranusLogo.png'
import Button from '../Common/Button/Button'
function AboutUs() {
    return (
        <section
            id="AboutUs"
            className="flex items-center px-40 py-20 w-full text-primary"
        >
            <div className="flex flex-col gap-4 w-[50%]">
                <h2 className="text-[3.5rem]">About Us</h2>
                <p className="text-[1.125rem] mb-8 w-[80%]">
                    A new IDO platform on Solana allows investors to contribute
                    to the project in various roles, promoting community
                    involvement. The project can leverage available resources
                    and fairly distribute tokens to the early IDO community.
                </p>
                <div className="inline-block">
                    <Button style="primary">Connect Wallet</Button>
                </div>
            </div>
            <div className="w-[50%]">
                <img src={UranusLogo} alt="" />
            </div>
        </section>
    )
}

export default AboutUs
