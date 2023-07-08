import Image from "next/image";
import { Table } from "@/types";

const Table = ({ name, front, containerStyle }: Table) => {
    const array = (text: any[]): React.ReactNode => {
        return text.map((element) => (
            <li key={element.id} className='space-y-4 flex items-center animate-fade-up animate-once animate-duration-[1200ms] hover:animate-bounce'>
                   { element.src && (
                    <Image src={element.src} alt={element.name} width={30} height={30} className="my-1 mr-1"/>
                   ) }
                {element.name}
            </li>
        ))
    }
    return (
        <article className={`w-1/4 max-md:w-11/12 max-md:ml-3 rounded-md my-4 ${containerStyle}`}>
            <h2 className="font-Bebas_Neue font-semibold text-5xl hover:text-6xl mb-5 text-center">{name}</h2>
            <ul className="font-Roboto font-semibold text-xl hover:text-2xl ml-1">{array(front)}</ul>
        </article>
    )
}

export default Table