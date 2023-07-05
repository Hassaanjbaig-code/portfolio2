import { Contact, Form } from "@/components"
import Image from "next/image"

const page = () => {
    return (
        <section className="w-full h-[calc(100vh-4rem)] bg-gray-800">
            {/* <div className="flex flex-col items-center justify-center w-full h-full"> */}
                <h2 className="font-Belanosima text-center align-middle font-extrabold text-6xl text-white">Contact</h2>
            {/* </div> */}
            <div className="w-full h-full flex justify-center items-center">
                <Form />
                <Contact />
            </div>
        </section>
    )
}

export default page