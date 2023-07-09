import { Intro, Table } from "@/components"
import { Front, Back, Developer } from "@/constants"

const page = () => {
  return (
    <div className='bg-[#121212] h-full overflow-hidden max-md:h-full container'>
      <h1 className='font-extrabold text-center shadow-sm text-8xl bg-clip-text text-[#fff] mt-10'>About Myself</h1>
      <div className="">
        <div >
          <Intro />
        </div>
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