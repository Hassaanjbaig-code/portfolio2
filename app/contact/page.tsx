import { Contact, Form, Personal_Contact } from "@/components"
import { Personal_link } from "@/constants"

const page = () => {
    return (
        <section className="w-full h-[calc(100vh-4rem)] bg-gray-800 max-md:h-screen">
            <h2 className="font-Belanosima text-center align-middle font-extrabold text-6xl text-white relative top-10 max-md:top-0">Contact</h2>
            <div className="w-full h-[83%] flex justify-center items-center max-md:items-start max-md:flex-col">
                <Form />
                <Contact />
            </div>
            <footer>
                <ul className="flex w-full justify-center items-center mb-10">
                    {Personal_link.map((ele) => (
                        <Personal_Contact
                            id={ele.id}
                            name={ele.name}
                            src={ele.src}
                            image={ele.image}
                        />
                    ))}
                </ul>
            </footer>
        </section>
    )
}

export default page