"use client";

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
            <AiOutlineCloseSquare className="text-4xl" />
          ) : (
            <HiMenuAlt1 className="text-4xl" />
          )
          }
        </button>
        <div id="Navbar" className={` p-6 black-gradient absolute top-11 right-[-16px] bg-gray-500 mx-4
        my-2 min-w-[140px] z-10 rounded-xl ${navbar ? "block" : "hidden"}`}>
          <ul className='list-none flex justify-end
          items-center flex-col gap-4'>
          {navbarname.map((name) => (
            <li key={name.id} className={`font-poppins font-medium cursor-pointer text-[18px]`} onClick={() => setNabar(false)}>
              <Link href={name.path} className="">{name.name}</Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
