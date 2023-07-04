import Image from "next/image"
import { Table } from "@/types"

const Table = ({ name, front, containerStyle }: Table) => {
    const array = (text: any[]): React.ReactNode => {
        return text.map((element, index) => (
            <li key={element.id} className='space-y-4 flex w-full items-center'>
                <Image src={element.src} alt={element.name} width={30} height={30} className="mr-5 my-1" />
                {element.name}
            </li>
        ))
    }
    return (
        <div className={`w-1/4 rounded-md ${containerStyle}`}>
            <h2 className="font-Bebas_Neue font-semibold text-5xl hover:text-6xl mb-5 text-center">{name}</h2>
            <ul className="font-Roboto font-semibold text-xl hover:text-2xl ml-1 ">{array(front)}</ul>
        </div>
    )
}

export default Table