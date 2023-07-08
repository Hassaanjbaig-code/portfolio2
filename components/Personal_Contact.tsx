import { Personal_link } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Personal_Contact = ({ id, src, image, name }: Personal_link) => {
    return (
            <li key={id} className="mx-3">
                <Link href={src}>
                    <Image src={image} alt={name} width={30} height={30} />
                </Link>
            </li>
    )
}

export default Personal_Contact;