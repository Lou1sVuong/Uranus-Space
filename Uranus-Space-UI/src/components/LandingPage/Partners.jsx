import { partnersData } from '@/data/dataPartner'

function Partners() {
    return (
        <div className="w-full z-2 bg-background flex items-center justify-between pt-20 gap-6 px-40">
            {partnersData.map((partner) => (
                <div key={partner.id}>
                    <img src={partner.image} alt="solana_img" />
                </div>
            ))}
        </div>
    )
}

export default Partners
