import Image from "next/image"
import { StaticImageData } from "next/image";

interface CardProps {
    cards: {
        logo: StaticImageData,
        company: string,
        position: string,
        date: string,
    }   
}

const Card = ({cards} : CardProps) => {
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm border border-gray-300">
            <div className="card-body">
                <div className="flex gap-3">
                    <Image src={cards.logo} className="rounded-full" alt={cards.company} width={64} height={64} />
                    <div>
                        <h2 className="card-title font-semibold">{cards.company}</h2>
                        <p className="text-sm">{cards.position}</p>
                    </div>
                </div>
                <p className="text-base">{cards.date}</p>
            </div>
        </div>
    )
}

export default Card