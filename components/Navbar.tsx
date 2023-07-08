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
      <h3 className="Logo">HB</h3>
      <div className="w-[15%] md:w-full flex flex-col items-end">
        <button type="button" className="md:hidden cursor-pointer " onClick={() => setNabar(!navbar)}>
          {navbar ? (
            <AiOutlineCloseSquare className="text-4xl relative top-[3rem]" />
          ) : (
            <HiMenuAlt1 className="text-4xl" />
          )
          }
        </button>
        <ul id="Navbar" className={`flex justify-between max-md:flex-col w-[30%] md:mr-7 max-md:relative max-md:top-[4.3rem] max-md:right-1 max-md:w-24 max-md:bg-gray-500 max-md:p-2 ${navbar ? 'max-md:flex-col' : 'max-md:hidden'
          }`}>
          {navbarname.map((name) => (
            <li key={name.id} className={`list-none cursor-pointer`} onClick={() => setNabar(false)}>
              <Link href={name.path} className="cursor-pointer">{name.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
