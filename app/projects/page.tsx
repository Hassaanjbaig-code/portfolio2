import { Card } from "@/components";
import Image from "next/image";
import { projectdata } from "@/constants";


const page = () => {
  const arr= projectdata;
  return (
    <div className="project">
      <div className=''>
      <Card />
      </div>
    </div>
  )
}

export default page
