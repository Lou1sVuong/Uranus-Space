import LaunchPad from '@/assets/svg/LaunchPad'
import Button from '@Common/Button/Button'
import logo from '@assets/logo/uranusLogoText.png'
import ArrowDown from '@assets/svg/ArrowDown'
import useScroll from '@/hooks/useScroll'

function Header() {
    const scrollingUp = useScroll()
    return (
        <nav
            className={`flex justify-between items-center px-40 py-5  z-20  fixed top-0 w-full text-primary transition-colors duration-500 ${scrollingUp ? 'bg-transparent' : 'bg-background border-b-[1px] border-border'}`}
        >
            <div className="flex gap-10">
                <div>
                    <a href="#">
                        <img
                            className="w-[10rem]"
                            src={logo}
                            alt="UranusLogo"
                        />
                    </a>
                </div>
            </div>
            <ul className="flex justify-center items-center gap-11">
                <li>
                    <a
                        href="#AboutUs"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>About Us</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#HowItWorks"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>How It Works</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#RoadMap"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>RoadMap</p>
                    </a>
                </li>
                <li>
                    <a
                        href="#FAQ"
                        className="flex justify-center items-center gap-2"
                    >
                        <p>FAQ</p>
                    </a>
                </li>
                <li>
                    <a
                        href="##"
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
