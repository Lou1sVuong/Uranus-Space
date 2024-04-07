import { roadMapData } from '@/data/dataRoadmap'
import Slider from 'react-slick'
import CardSlideRoadMap from '../CardSlideRoadMap/CardSlideRoadMap'

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <div
            className="btnRight absolute top-1/2 transform -translate-y-1/2 -right-20 z-10"
            onClick={onClick}
        >
            <div className="bg-gray-300 rounded-[50%] w-[70px] h-[70px] flex items-center justify-center bg-gradient-to-b from-rgba-249-249-249-26 to-rgba-255-255-255-13 border border-rgba-235-255-249-50 backdrop-blur-20">
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <div
            className="btnLeft absolute top-1/2 transform -translate-y-1/2 -left-20 z-10"
            onClick={onClick}
        >
            <div className="bg-gray-300 rounded-[50%] w-[70px] h-[70px] flex items-center justify-center bg-gradient-to-b from-rgba-249-249-249-26 to-rgba-255-255-255-13 border border-rgba-235-255-249-50 backdrop-blur-20">
                <ArrowLeftOutlined />
            </div>
        </div>
    )
}

function CustomArrows() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div className="w-4/5 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {roadMapData.map((d) => (
                        <div
                            key={d.id}
                            className="bg-red-200 h-[450px] text-[#FFF] rounded-xl"
                        >
                            <div className="flex text-center h-[70%] bg-[#826DF9] flex-col items-center justify-center rounded-t-xl gap-4 p-4">
                                <p className="text-center">{d.title}</p>
                                <p classNam>{d.content}</p>
                            </div>
                            <div className="h-[30%] bg-[#BC57C4] flex justify-center items-center rounded-b-xl">
                                {d.title}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CustomArrows
