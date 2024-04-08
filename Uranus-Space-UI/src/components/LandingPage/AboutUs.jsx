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
                <p className="text-[1.125rem] mb-8 w-[70%]">
                    Our core contributors are a team of close-knit engineers
                    with backgrounds from Google, Facebook, and Microsoft and
                    who have contributed open source code for Serum and Solana.
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
