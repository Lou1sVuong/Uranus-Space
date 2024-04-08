import DiscordLogo from '@/assets/svg/Discord'
import logo from '../../assets/logo/uranusLogoText.png'
import TwitterLogo from '@/assets/svg/Twitter'
import { IoIosArrowUp } from 'react-icons/io'

function Footer() {
    return (
        <footer className="flex flex-col gap-12 mt-20 px-40 mb-14">
            <div className="flex justify-between">
                <section className=" flex flex-col gap-6">
                    <img className="w-[8rem]" src={logo} alt="" />
                    <div className="text-description font-normal">
                        Join our Discord channel or follow us on
                        <br /> Twitter to keep up to date with our latest work
                        <br /> and announcements.
                    </div>
                    <div className="flex gap-6">
                        <DiscordLogo /> <TwitterLogo />
                    </div>
                </section>
                <section className="flex gap-16">
                    <div>
                        <p className="text-primary text-[22px] font-bold mb-5">
                            Quick Link
                        </p>
                        <div className="flex flex-col gap-3 text-description text-lg  font-normal">
                            <p>About</p>
                            <p>How it works</p>
                            <p>Roadmap</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary text-[22px] font-bold mb-5">
                            Community
                        </p>
                        <div className="flex flex-col gap-3 text-description text-lg  font-normal">
                            <p>Documentation</p>
                            <p>Web3Dev</p>
                            <p>LinkTree</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className='flex justify-between'>
                <div className="mt-14 text-description font-normal">
                    Copyright © 2024 Uranus Space
                </div>
                <div className="mt-14 text-description font-normal flex gap-5 items-center">
                    Privacy policy <span>Terms of Use</span> <IoIosArrowUp />
                </div>
            </div>
        </footer>
    )
}

export default Footer
