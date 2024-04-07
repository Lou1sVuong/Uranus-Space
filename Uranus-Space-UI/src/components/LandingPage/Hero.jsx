import Clock from '@/assets/image/clock.png'
import Money from '@/assets/image/money.png'
import LaunchPad from '@/assets/image/rocket.png'
import Outline from '@/assets/svg/hero/Outline'
import { ReactTyped } from 'react-typed'
import Button from '../Common/Button/Button'

function Hero() {
    return (
        <div
            id="#Home"
            className="flex bg-background w-full px-40 py-32 gap-9 font-bold  text-primary"
        >
            <div className="flex flex-col gap-5 w-[45%]">
                <h1 className="text-7xl">Uranus Space</h1>
                <h4 className="text-base text-primary">
                    <ReactTyped
                        strings={[
                            '"Next-generation IDO platform solution on Solana"',
                        ]}
                        typeSpeed={50}
                        backSpeed={200}
                        loop
                    />
                </h4>
                <div className="mt-10">
                    <Button style="primary" width="10rem">
                        Connect Wallet
                    </Button>
                </div>
            </div>
            <div className=" w-[55%]">
                <div className="relative">
                    <Outline />
                    <img
                        className="absolute top-[15%] right-0 w-[40%]"
                        src={LaunchPad}
                        alt="LaunchPad"
                    />
                    <img
                        className="absolute top-[15%] right-[30%] w-[35%]"
                        src={Money}
                        alt="Money"
                    />
                    <img
                        className="absolute top-[15%] right-[65%] w-[40%]"
                        src={Clock}
                        alt="Clock"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
