import Image from "next/image"
import { navbarname } from "@/constants"

const Navbar = () => {
  return (
    <div className="navbar_div">
        <Image src='/Logo.png' alt="Logo" width={116} height={56} className="object-contain" />
        <ul className="flex justify-between w-[40%]">   
     {navbarname.map((name) => (
        <li key={name.id} className="list-none">
            <h2>{name.name}</h2>
        </li>
     ))}
     </ul>
    </div>
  )
}

export default Navbar
