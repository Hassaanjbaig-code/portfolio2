import Image from "next/image"
import { Intro, Skill } from "@/components"

const page = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-4rem)] overflow-hidden'>
        <h1 className='font-Belanosima font-bold text-5xl text-center text-white mt-10'>About Myself</h1>
        <div className="flex flex-col w-full h-full justify-center">
          <Intro />
          <Skill />
        </div>
    </div>
  )
}

export default page