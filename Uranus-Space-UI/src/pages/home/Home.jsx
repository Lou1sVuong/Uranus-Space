import AboutUs from '@/components/LandingPage/AboutUs'
import Advantage from '@/components/LandingPage/Advantage'
import Faq from '@/components/LandingPage/Faq'
import Hero from '@/components/LandingPage/Hero'
import HowItWorks from '@/components/LandingPage/HowItWorks'
import Partners from '@/components/LandingPage/Partners'
import RoadMapSlide from '@/components/LandingPage/RoadMapSlide'
import Supported from '@/components/LandingPage/Supported'

function Home() {
    return (
        <div className=" ">
            <Hero />
            <Partners />
            {/* <Supported /> chừng nào có nhiều supported thì để */}
            <HowItWorks />
            <AboutUs />
            <RoadMapSlide />
            <Faq />
        </div>
    )
}

export default Home
