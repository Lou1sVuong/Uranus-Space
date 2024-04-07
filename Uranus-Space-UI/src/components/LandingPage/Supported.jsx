import Solana from '@/assets/svg/supported/Solana'
import React from 'react'

function Supported() {
    return (
        <div className="w-full bg-background px-40 py-20">
            <div className="flex flex-col gap-10 justify-center items-center w-full h-[20rem] rounded-[1.875rem] px-[2rem] py-7 bg-bgsecondary">
                <h3 className="text-primary text-[2.25rem] font-bold ">
                    Supported by
                </h3>
                <Solana />
            </div>
        </div>
    )
}

export default Supported
