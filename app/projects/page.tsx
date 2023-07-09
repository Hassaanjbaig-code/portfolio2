import { Card } from "@/components";
import Image from "next/image";
import { projectdata } from "@/constants";


const page = () => {
  const arr= projectdata;
  return (
    <div className="project">
      <h1 className="font-extrabold text-center shadow-sm text-8xl bg-clip-text text-[#fff] mt-10">My Project</h1>
      <div className=''>
      <Card />
      </div>
    </div>
  )
}

export default page
