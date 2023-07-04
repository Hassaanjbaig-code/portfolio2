import Image from "next/image"
import { Intro, Table } from "@/components"
import { Front, Front_End } from "@/constants"

const page = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-4rem)] overflow-hidden'>
        <h1 className='font-Belanosima font-bold text-5xl text-center text-white mt-10'>About Myself</h1>
        <div className="flex flex-col w-full h-full justify-center">
          <Intro />
          <Table 
            name="Front End"
            front={Front}
          />
        </div>
    </div>
  )
}

export default page