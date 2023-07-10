import { Contact, Form, Personal_Contact } from "@/components"

const page = () => {
    return (
        <section className="w-full h-[calc(100vh-4rem)] max-md:h-full flex flex-col justify-around">
            <h2 className="font-extrabold text-center shadow-sm text-8xl bg-clip-text text-[#fff] mt-10">Contact</h2>
            <div className="w-full md:h-[70%] flex justify-center items-center max-md:items-start max-md:flex-col">
                <Form />
                <Contact />
            </div>
            <footer>
                <Personal_Contact />
            </footer>
        </section>
    )
}

export default page