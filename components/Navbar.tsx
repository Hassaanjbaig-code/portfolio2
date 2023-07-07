import Image from "next/image"
import { navbarname } from "@/constants"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="navbar_div">
        <Image src='/Logo.png' alt="Logo" width={116} height={56} className="object-contain ml-5" />
        <ul className="flex justify-between w-[18%] mr-7">   
     {navbarname.map((name) => (
        <li key={name.id} className="list-none max-md:hidden">
            <Link href={name.path}>{name.name}</Link>
        </li>
     ))}
     </ul>
    </div>
  )
}

export default Navbar
