import Solana from '@/assets/svg/supported/Solana'

function Supported() {
    return (
        <div className="w-full bg-background px-40 py-20">
            <div className="flex flex-col gap-10 justify-center items-center w-full h-[20rem] rounded-[1.875rem] px-[8rem] py-7 bg-bgsecondary">
                <h3 className="text-primary text-[2rem] mb-10 font-bold ">
                    Supported by
                </h3>
                <div className="flex justify-around w-full">
                    <Solana />
                    <Solana />
                    <Solana />
                </div>
            </div>
        </div>
    )
}

export default Supported
