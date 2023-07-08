"use client";

import Image from "next/image"
import { navbarname } from "@/constants"
import Link from "next/link"
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNabar] = useState(false)
  return (
    <nav className="navbar_div">
      <Image src='/Logo.png' alt="Logo" width={116} height={56} className="object-contain ml-5" />
      <div className="w-[15%] flex flex-col items-end">
        <button className={`md:hidden cursor-pointer `} onClick={() => setNabar(!navbar)}>
          {navbar ? (
            <HiMenuAlt1 className="text-4xl" />
          ) : (
            <AiOutlineCloseSquare className="text-4xl relative top-[3rem]" />
          )
          }
        </button>
        <ul id="Navbar" className={`flex justify-between max-md:flex-col w-[18%] md:mr-7 max-md:w-[98%] max-md:relative max-md:top-[4.3rem] max-md:bg-gray-500 max-md:p-2 ${navbar ? 'max-md:hidden' : 'max-md:flex-col'
          }`}>
          {navbarname.map((name) => (
            <li key={name.id} className="list-none ">
              <Link href={name.path}>{name.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
