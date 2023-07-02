'use client'
'use '

import Image from "next/image";
import { projectdata } from "@/constants";
import Link from "next/link";

const Card = () => {
  const slice = (text: string, maxWords: number) => {
    const words = text.split(" ");
    const slicedWords = words.slice(0, maxWords);
    return slicedWords.join(" ");
  };
  return (
    <div className="flex justify-center items-center w-full flex-col my-22">
      {projectdata.map((data) => (
        <div className="flex w-[80%] justify-between items-center p-6 gap-x-3" key={data.id}>
          <div className="flex w-[90rem] h-[14rem]">
            <Image src={data.Image} alt="Logo" width={300} height={100} className="object-contain self-center" />
          </div>
          <div>
            <div className="">
              <h2>{data.title}</h2>
              <p>{ slice(data.description, 50) }</p>
            </div>
            <div>
              <button type="button">
                <Link
                  key={data.title}
                  href={`${data.Live_demo}`}
                  type="Live_demo"
                  className="text-gray-500"
                >
                  Live Demo
                </Link>
              </button>
              <Link
                key={data.title}
                href={`${data.Urls}`}
                type="Url"
                className="text-gray-500"
              >
                See the source code
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
