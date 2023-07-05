import Image from "next/image"

const Form = () => {
    return (
        <div>
            <form className="text-white flex flex-col gap-4">
                <legend className="font-serif font-semibold ">Message me</legend>
                <span className="gap-4 flex">
                    <input type="text" placeholder="Name" className="bg-black w-[14rem] h-[2rem] border-b border-border p-2 placeholder-primary" />
                    <input type="text" placeholder="Email" className="bg-black w-[14rem] h-[2rem] border-b border-border p-2 placeholder-primary" />
                </span>
                    <input type="text" placeholder="Subject" className="bg-black w-[29rem] h-[2rem] border-b border-border p-4 placeholder-primary" />
                    <textarea placeholder="Message" className="bg-black w-[29rem] h-28 p-2 placeholder-primary border-b-[1px] border-border"/>
                    <input type="submit" value='Send Message' className="bg-blue-400 w-36 h-10 rounded-lg "/>
            </form>
        </div>
    )
}

export default Form