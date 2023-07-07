import { Contact, Form } from "@/components"
import Image from "next/image"

const page = () => {
    return (
        <section className="w-full h-[calc(100vh-4rem)] bg-gray-800">
            <h2 className="font-Belanosima text-center align-middle font-extrabold text-6xl text-white relative top-10 max-md:top-0">Contact</h2>
            <div className="w-full h-[90%] flex justify-center items-center gap- max-md:flex-col">
                    <Form />
                    <Contact />
            </div>
        </section>
    )
}

export default page