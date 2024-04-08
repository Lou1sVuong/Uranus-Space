import { advantageData } from '@/data/dataAdvantage'

function Advantage() {
    return (
        <div className="pt-10 px-52 bg-background">
            <h4 className="text-primary gap-3 text-5xl flex justify-center pt-10 font-bold ">
                The{' '}
                <span className=" bg-gradient02 text-5xl font-bold  bg-clip-text text-transparent">
                    Advantage
                </span>
            </h4>
            {advantageData.map((item) => (
                <div
                    key={item.id}
                    className="flex justify-between items-center mb-28"
                >
                    <div className="flex-col w-[40%] gap-6 flex">
                        <p className="text-lg bg-clip-text text-transparent bg-gradient02 font-bold">
                            0{item.id}.
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            {item.title}
                        </p>
                        <div className="text-description text-lg">
                            {item.content}
                        </div>
                    </div>

                    <div>
                        <img
                            className="h-[26rem]"
                            src={item.img}
                            alt={item.alt}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Advantage
