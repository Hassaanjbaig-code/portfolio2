'use client'

import Image from "next/image";
import { projectdata } from "@/constants";
import Link from "next/link";

const Card = () => {
  const slice = (text: string, maxWords: number) => {
    const words = text.split(" ");
    const slicedWords = words.slice(0, maxWords);
    return slicedWords.join(" ");
  };
  const frames = (text: (string | number)[]): React.ReactNode => {
    return text.map((element, index) => (
      <li key={index} className={`${index} frame`}>{element}</li>
    ));
  };

  const Languages = (text: (string | number)[]): React.ReactNode => {
    return text.map((element, index) => (
      <li className='mx-2 border border-blue-300 bg-blue-500 p-[2px] rounded-lg text-[10px] p-1'>{element}</li>
    ))
  }

  return (
    <ul>
      <div className='flex flex-col justify-center items-center gap-y-5'>
        {projectdata.map((data) => (
          <li className="flex w-[80%] justify-between items-center p-6 gap-x-10 list-none border border-slate-600 rounded-[40px] mt-5 mb-5" key={data.id}>
            <div className="flex w-[700px] h-[14rem]">
              <Image src={`/${data.title}.png`} alt="Logo" width={500} height={200} />
            </div>
            <div>
              <div>
                <h2 className="Card_title">{data.title}</h2>
                <div className="my-2">
                  <ul className="grid grid-cols-14c">{frames(data.frames)}</ul>
                  <p className='font-Roboto'>{slice(data.description, 50)}</p>
                </div>
                <ul className='flex my-2'>{Languages(data.language)}</ul>
              </div>
              <div>

              </div>
              <div>
                <button type="button" className='p-2 rounded-md border border-slate-400 mr-2 hover:bg-black hover:text-white hover:border-none'>
                  <Link
                    key={data.title}
                    href={`${data.Live_demo}`}
                    type="Live_demo"
                    className="text-gray-500 hover:text-gray-400"
                  >
                    Live Demo
                  </Link>
                </button>
                <button type="button" className='p-2 rounded-md border border-slate-400 mr-2 hover:bg-black hover:border-none'>
                  <Link
                    key={data.title}
                    href={`${data.Urls}`}
                    type="Url"
                    className="text-gray-500 hover:text-gray-200"
                  >
                    See the source code
                  </Link>
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Card
