"use client";

import Image from "next/image";
import { projectdata } from "@/constants";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { BiSkipNext } from 'react-icons/bi';

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

  const handleClick = (text: (string | null)) => {
    if (text !== null) {
      window.location.href = text;
    }
  }

  const Languages = (text: (string | number)[]): React.ReactNode => {
    return text.map((element, index) => (
      <li key={index} className='mx-2 border border-blue-300 bg-blue-500 rounded-lg text-[10px] p-1'>{element}</li>
    ))
  };

  return (
    <ul className='flex flex-col justify-center items-center gap-y-5'>
      {projectdata.map((data, index) => (
        <li key={index} id={`${data.id}`} className="flex w-[80%] p-6 gap-x-10 list-none border border-slate-600 rounded-[40px] mt-5 mb-5 justify-between items-center">
          <div className="flex w-[700px] h-[14rem]">
            <Image src={`/${data.title}.png`} alt="Logo" width={500} height={200} />
          </div>
          <div>
            <div>
              <div className="w-full flex justify-between">
                <h2 className="Card_title">{data.title}</h2>
                <Link href={`/projects/${data.id}`} className="text-4xl cursor-pointer hover:text-blue-300">
                  <BiSkipNext />
                </Link>
              </div>

              <div className="my-2">
                <ul className="grid grid-cols-14c">{frames(data.frames)}</ul>
                <p className='font-Roboto'>{slice(data.description, 50)}</p>
              </div>
              <ul className='flex my-2'>{Languages(data.language)}</ul>
            </div>
            {data.Live_demo && (
              <CustomButton
                title="Live Preview"
                containerStyles="p-2 rounded-md border border-slate-400 mr-2 hover:bg-black hover:border-none"
                src={data.Live_demo}
              />
            )}
            <CustomButton
                title="Source Code"
                containerStyles="p-2 rounded-md border border-slate-400 mr-2 hover:bg-black hover:border-none"
                src={data.sourcecode}
              />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Card
