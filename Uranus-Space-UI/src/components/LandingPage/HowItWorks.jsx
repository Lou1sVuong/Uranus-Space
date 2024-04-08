import React from 'react'
import cross from '@/assets/svg/howitworks/cross-collateral.png'
import flash from '@/assets/svg/howitworks/flash-loans.png'
import variable from '@/assets/svg/howitworks/variable-rates.png'

function HowItWorks() {
    const howitworks = [
        {
            id: 1,
            title: 'Cross Collateral',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
            image: cross,
        },
        {
            id: 2,
            title: 'Cross Collateral',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
            image: flash,
        },
        {
            id: 3,
            title: 'Cross Collateral',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
            image: variable,
        },
    ]

    return (
        <section id="HowItWorks" className="px-40 py-32">
            <div className="grid grid-cols-3 gap-24">
                {howitworks.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-center relative h-[20rem] text-primary bg-bgsecondary rounded-[2rem]"
                    >
                        <div className="flex justify-center items-center absolute h-[7.5rem] w-[7.5rem] rounded-full top-[-3rem] bg-[#293364] drop-shadow-xl">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="text-center mt-24">
                            <h3 className="text-xl font-bold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks
