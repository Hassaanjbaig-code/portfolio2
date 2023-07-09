"use client";

import Image from "next/image";
import { projectdata } from "@/constants";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { BiSkipNext } from 'react-icons/bi';
import Aos from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
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
      <li key={index} className='mx-2 border border-blue-300 bg-white text-center text-[#2c2c2c] w-20 h-7 rounded-lg text-[10px] p-1 max-md:text-[8px]'>{element}</li>
    ))
  };

  return (
    <ul className='flex flex-col justify-center items-center gap-y-5 '>
      {projectdata.map((data, index) => (
        <li data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="1000" key={index} id={`${data.id}`} className="flex w-[80%] bg-[#383838] md:h-[33rem] p-8 gap-x-10 list-none border-2 border-slate-800 rounded-[40px] mt-5 mb-5 justify-between items-center max-md:flex-col reverse">
          <div id={`image_${index }`} className="flex w-[90rem] md:h-[27rem] max-md:w-[256px] max-md:mb-6 image_card">
            <Image src={`/${data.title}.png`} alt="Logo" width={600} height={200} className="rounded-xl" />
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="md:h-[16rem]">
              <div className="w-full flex justify-between items-center">
                <h2 className="Card_title">{data.title}</h2>
                <Link href={`/projects/${data.id}`} className="text-4xl cursor-pointer hover:text-blue-300">
                  <BiSkipNext />
                </Link>
              </div>

              <div className="my-2">
                <ul className="grid grid-cols-3 items-center max-md:grid-cols-16">{frames(data.frames)}</ul>
                <p className='font-Roboto text-[#d1d0d0c7]'>{slice(data.description, 50)}</p>
              </div>
              <ul className='flex my-2'>{Languages(data.language)}</ul>
            </div>
            <div>
              {data.Live_demo && (
                <CustomButton
                  title="Live Preview"
                  containerStyles="p-2 rounded-md bg-[#121212] text-white p-3 mr-2 hover:bg-black hover:border-none hover:text-white"
                  src={data.Live_demo}
                />
              )}
              <CustomButton
                title="Source Code"
                containerStyles="p-2 rounded-md bg-[#121212] text-white p-3 mr-2 hover:bg-black hover:border-none hover:text-white"
                src={data.sourcecode}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Card
