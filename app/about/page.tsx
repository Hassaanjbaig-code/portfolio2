import { Intro, Table } from "@/components"
import { Front, Back, Developer } from "@/constants"

const page = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-4rem)] overflow-hidden max-md:h-full'>
      <h1 className='font-Belanosima font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-black to-white text-center mt-10'>About Myself</h1>
      <div className="flex flex-col w-full h-full justify-center">
        <Intro />
        <div className="flex w-full justify-around max-md:flex-col animationfade">
          <Table
            name="Front End"
            front={Front}
            containerStyle="bg-orange-300 text-white hover:-translate-y-1 hover:scale-110 hover:bg-orange-800 duration-300 duration-100"
          />
          <Table
            name="Back End"
            front={Back}
            containerStyle="bg-blue-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 animationfade"
          />
          <Table
            name="Developer Tool"
            front={Developer}
            containerStyle="bg-purple-300 text-white hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300 animationfade"
          /> 
        </div>
      </div>
    </div>
  )
}

export default page