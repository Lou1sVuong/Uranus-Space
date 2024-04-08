import Clock from '@/assets/image/clock.png'
import Money from '@/assets/image/money.png'
import LaunchPad from '@/assets/image/rocket.png'
import { ReactTyped } from 'react-typed'
import Button from '../Common/Button/Button'
import video from '../../assets/image/video.mp4'

function Hero() {
    return (
        <div
            id="#Home"
            className="flex relative bg-background w-full py-44 gap-9 font-bold overflow-hidden text-primary"
        >
            <video
                className="p-0 z-0 absolute  top-0"
                src={video}
                autoPlay
                loop
                muted
            ></video>
            <div className="flex px-40 z-10 flex-col gap-5 mt-32 ">
                <h1 className="text-7xl font-bold bg-gradient02 bg-clip-text text-transparent">
                    Uranus Space
                </h1>
                <h4 className="text-2xl text-primary">
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
        </div>
    )
}

export default Hero
