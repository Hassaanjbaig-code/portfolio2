"use client";

import { navbarname } from "@/constants"
import Link from "next/link"
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [navbar, setNabar] = useState(false)
  const router = useRouter()
  const path = usePathname();
  return (
    <nav className="navbar_div">
      <h3 className="Logo">HB</h3>
      <div className="w-[15%] md:w-full flex flex-col items-end">
        <ul className='list-none hidden sm:flex flex-row
       gap-10'>
          {navbarname.map((link) => (
            <li key={link.id}
              className={`${ path === link.name ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer mr-5`}>
              <a onClick={() => router.push(link.path)}>{link.name}</a>
            </li>
          ))}
        </ul>
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
