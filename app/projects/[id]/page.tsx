"use client";

import Image from "next/image";
import { projectdata } from "@/constants";
import React from "react";
import CustomButton from "@/components/CustomButton";

const Page = ({ params }: any) => {
    const id = params.id;
    const frames = (text: (string | number)[]): React.ReactNode => {
        return text.map((element, index) => (
            <li key={index} className={`${index} frame`}>{element}</li>
        ));
    };
    const Languages = (text: (string | number)[]): React.ReactNode => {
        return text.map((element, index) => (
            <li key={index} className='mx-2 border border-blue-300 bg-white rounded-lg text-[10px] p-1 w-16 h-7 text-center text-[#2c2c2c]'>{element}</li>
        ))
    };

    return (
        <div className="project h-screen max-md:h-full">
            {projectdata.map((ele) => {
                if (ele.id == id) {
                    return (
                        <div key={ele.id} className="flex flex-col justify-center items-center w-full h-full">
                            <div className="h-[30rem] my-5">
                                <Image src={ele.Image} alt={ele.title} width={800} height={600} className="h-full" />
                            </div>
                            <div >
                                <h2 className="Card_title text-center my=3">{ele.title}</h2>
                                <div className="my-6 w-full text-center items-center">
                                    <ul className="grid grid-cols-14c justify-center my-5 items-center">{frames(ele.frames)}</ul>
                                    <div className="flex w-full justify-center items-center">
                                        <p className='w-[60%] text-[#d1d0d0c7]'>{ele.description2}</p>
                                    </div>
                                </div>
                                <ul className='flex my-6 w-full justify-center items-center'>{Languages(ele.language)}</ul>
                            </div>
                            <div id="button-list" className="max-md:mb-5">
                                {ele.Live_demo && (
                                    <CustomButton
                                        title="Live Preview"
                                        containerStyles="p-2 rounded-md bg-[#121212] text-white p-3 mr-2 hover:bg-black hover:border-none hover:text-white"
                                        src={ele.Live_demo}
                                    />
                                )}
                                <CustomButton
                                    title="Source Code"
                                    containerStyles="p-2 rounded-md bg-[#121212] text-white p-3 mr-2 hover:bg-black hover:border-none hover:text-white"
                                    src={ele.sourcecode}
                                />
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default Page;
