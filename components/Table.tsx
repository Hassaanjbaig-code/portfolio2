import Image from "next/image";
import { Table } from "@/types";
// import { AiFillHtml5 } from 'react-icons/ai';
// import { DiCss3 } from 'react-icons/di';
// import { BiLogoJavascript, BiLogoBootstrap, BiLogoReact, BiLogoRedux, BiLogoSass } from 'react-icons/bi';
// import * as boxicons from 'react-icons/bi';
// import { TbBrandTailwind } from 'react-icons/tb';
import React from "react";

const Table = ({ name, front, containerStyle }: Table) => {
    const array = (text: any[]): React.ReactNode => {
        return text.map((element, index) => (
            <li key={element.id} className='space-y-4 flex items-center'>
                   { element.src && (
                    <Image src={element.src} alt={element.name} width={30} height={30} className="my-1 mr-1"/>
                   ) }
                {element.name}
            </li>
        ))
    }
    return (
        <article className={`w-1/4 rounded-md ${containerStyle}`}>
            <h2 className="font-Bebas_Neue font-semibold text-5xl hover:text-6xl mb-5 text-center">{name}</h2>
            <ul className="font-Roboto font-semibold text-xl hover:text-2xl ml-1 ">{array(front)}</ul>
        </article>
    )
}

export default Table