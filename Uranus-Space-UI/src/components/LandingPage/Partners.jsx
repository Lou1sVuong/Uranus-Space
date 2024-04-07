import { partnersData } from '@/data/dataPartner'


function Partners() {
    return (
        <div className='w-full bg-gradient01 flex items-center justify-center py-2 gap-6 px-40'>
            {partnersData.map((partner) => (
                <div key={partner.id}><img src={partner.image} alt="solana_img" /></div>
            ))}
        </div>
    )
}

export default Partners
