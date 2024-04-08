import Advantage from '@/components/LandingPage/Advantage'
import Faq from '@/components/LandingPage/Faq'
import Hero from '@/components/LandingPage/Hero'
import Partners from '@/components/LandingPage/Partners'
import RoadMapSlide from '@/components/RoadMapSlide/RoadMapSlide'

function Home() {
    return (
        <div className=" ">
            <Hero />
            <Partners />
            <Advantage />
            <Faq/>
            <RoadMapSlide />
           
        </div>
    )
}

export default Home
