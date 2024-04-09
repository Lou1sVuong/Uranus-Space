import { roadMapData } from '@/data/dataRoadmap'
import Slider from 'react-slick'

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 -right-20 z-10"
            onClick={onClick}
        >
            <div className="bg-opacity-80 hover:bg-opacity-90 bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center  border-[2px] border-bgsecondary">
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 -left-20 z-10"
            onClick={onClick}
        >
            <div className="bg-opacity-80 hover:bg-opacity-90 bg-white rounded-full w-[70px] h-[70px] flex items-center justify-center  border-[2px] border-bgsecondary">
                <ArrowLeftOutlined />
            </div>
        </div>
    )
}

function CustomArrows() {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <>
            <section id="RoadMap" className="bg-background">
                <div className="w-[85%] m-auto">
                    <h4 className="text-primary gap-3 text-5xl flex justify-center pt-10 font-bold ">
                        The{' '}
                        <span className="  text-5xl font-bold bg-gradient02  bg-clip-text text-transparent">
                            RoadMap
                        </span>
                    </h4>
                    <div className="pt-10">
                        <Slider {...settings}>
                            {roadMapData.map((d) => (
                                <div
                                    key={d.id}
                                    className="flex items-center bg-transparent border-2 border-border h-[550px] text-[#FFF] rounded-xl"
                                >
                                    <div className="flex  h-[80%] border-1 border-b border-border  flex-col  rounded-t-xl gap-4 p-4">
                                        <p className="text-center font-semibold text-bg mb-10">
                                            {d.title}
                                        </p>
                                        {d.content.map((item, index) => (
                                            <p
                                                className="text-left"
                                                key={index}
                                            >
                                                ● {item}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="h-[20%]  flex justify-center items-center rounded-b-xl">
                                        {d.timeline}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomArrows
