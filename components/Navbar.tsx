import Image from "next/image"
import { navbarname } from "@/constants"

const Navbar = () => {
  return (
    <div className="navbar_div">
        <Image src='/Logo.png' alt="Logo" width={116} height={56} className="object-contain" />
        <div className="flex justify-between w-[40%]">   
     {navbarname.map((name) => (
        <div key={name.id}>
            <h2>{name.name}</h2>
        </div>
     ))}
     </div>
    </div>
  )
}

export default Navbar
