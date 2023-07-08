import Image from "next/image";
import { Personl } from "@/constants";
import Link from "next/link";

const Contact = () => {
    const array = (text: any[]): React.ReactNode => {
        return text.map((element, index) => (
            <li key={element.id} className='flex w-full items-center my-5'>
                <span>
                    <Image src={element.src} alt={element.name} width={34} height={34} className="mr-5 my-1" />
                </span>
                <h4 className="text-sm text-[#f7dedeb8]">
                    {element.name}
                </h4>
            </li>
        ))
    }
    return (
        <section className="flex flex-col text-white mb-8 ml-3">
            <div>
                <h2 className="font-serif font-semibold mb-3">Contact Information</h2>
                <p className="text-[#f7dedeb8] text-base my-4">Open for opportunities. Let's connect and build something awesome together! </p>
            </div>
            <ul className="">
                {array(Personl)}
                <li className="flex w-full items-center my-5">
                    <span>
                        <Image src='/email.png' alt='hassaanb000@gmail.com' width={30} height={30} className="mr-5 my-1" />
                    </span>
                    <Link href='mailto:hassaanb000@gmail.com' className="text-[#00ceff] underline">
                        hassaanb000@gmail.com
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Contact