
function CardSlideRoadMap(
    {content, title, timeline}
) {
  return (
      <div className="bg-rose-500 rounded-[20px] w-[250px] h-[200px]">
          <div className="h-[70%] rounded-t-[20px] bg-blue-400 flex justify-center items-center">
              {content}{title}
          </div>
          <div className="h-[30%] rounded-b-[20px] bg-blue-300 flex justify-center items-center">
              {timeline}
          </div>
      </div>
  )
}

export default CardSlideRoadMap