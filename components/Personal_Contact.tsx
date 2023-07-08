import { Personal_link } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Personal_Contact = () => {
    return (
        <ul className="flex w-full justify-center items-center mb-10">

            {Personal_link.map((ele, index) => (
                <li key={index} className="mx-3">
                    <Link href={ele.src}>
                        <Image src={ele.image} alt={ele.name} width={28} height={28} />
                    </Link>
                </li>

            ))}
        </ul>
    )
}

export default Personal_Contact;