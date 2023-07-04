import Image from "next/image"
import { Table } from "@/types"

const Table = ( { name, front }: Table  ) => {
    const array = (text: any[]): React.ReactNode => {
        return text.map((element, index) => (
          <li key={element.id} className='space-y-4'>{element.name}</li>
        ))
      }
    return (
        <div className="w-1/6 h-62 bg-orange-300 text-white rounded-md">
            <h2 className="font-Bebas_Neue font-semibold text-3xl mb-5">{name}</h2>
            <ul className="font-Roboto font-semibold text-lg ml-1">{array(front)}</ul>
        </div>
    )
}

export default Table