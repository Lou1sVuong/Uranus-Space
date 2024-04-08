import { roadMapData } from '@/data/dataRoadmap'
import Slider from 'react-slick'
import CardSlideRoadMap from '../CardSlideRoadMap/CardSlideRoadMap'

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
            <div className="bg-background">
                <div className="w-4/5 m-auto">
                    <h4 className="text-primary gap-3 text-5xl flex justify-center pt-10 font-bold ">
                        The{' '}
                        <span className=" bg-gradient02 text-5xl font-bold  bg-clip-text text-transparent">
                            RoadMap
                        </span>
                    </h4>
                    <div className="pt-10">
                        <Slider {...settings}>
                            {roadMapData.map((d) => (
                                <div
                                    key={d.id}
                                    className="bg-transparent border-4 border-[#1F2441] h-[450px] text-[#FFF] rounded-xl"
                                >
                                    <div className="flex text-center h-[70%] border-1 border-b border-border  flex-col justify-center rounded-t-xl gap-4 p-4">
                                        <p className="text-center font-semibold text-bg">
                                            {d.title}
                                        </p>
                                        <p classNam>{d.content}</p>
                                    </div>
                                    <div className="h-[30%]  flex justify-center items-center rounded-b-xl">
                                        {d.title}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomArrows
