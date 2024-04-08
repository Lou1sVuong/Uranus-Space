import { partnersData } from '@/data/dataPartner'

function Partners() {
    return (
        <div className="w-full flex items-center justify-center  py-5 px-40 gap-6">
            {partnersData.map((partner) => (
                <div key={partner.id}>
                    <img src={partner.image} alt="solana_img" />
                </div>
            ))}
        </div>
    )
}

export default Partners
