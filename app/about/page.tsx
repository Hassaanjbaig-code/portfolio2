import Image from "next/image"
import { Intro, Table } from "@/components"
import { Front, Back, Developer } from "@/constants"

const page = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-4rem)] overflow-hidden'>
      <h1 className='font-Belanosima font-bold text-5xl text-center text-white mt-10'>About Myself</h1>
      <div className="flex flex-col w-full h-full justify-center">
        <Intro />
        <div className="flex w-full justify-around">
          <Table
            name="Front End"
            front={Front}
            containerStyle="bg-orange-300 text-white hover:bg-orange-800"
          />
          <Table
            name="Back End"
            front={Back}
            containerStyle="bg-blue-500 text-white hover:bg-blue-800"
          />
          <Table
            name="Developer Tool"
            front={Developer}
            containerStyle="bg-purple-300 text-white hover:bg-purple-500"
          /> 
        </div>
      </div>
    </div>
  )
}

export default page