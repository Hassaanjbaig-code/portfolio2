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
            <li key={index} className='mx-2 border border-blue-300 bg-blue-500 rounded-lg text-[10px] p-1'>{element}</li>
        ))
    };

    return (
        <div className="project h-screen">
            {projectdata.map((ele) => {
                if (ele.id == id) {
                    return (
                        <div key={ele.id} className="flex flex-col justify-center items-center w-full h-full">
                            <div>
                                <Image src={ele.Image} alt={ele.title} width={800} height={800} />
                            </div>
                            <div >
                                <h2 className="font-Belanosima font-extrabold text-8xl text-center">{ele.title}</h2>
                                <div className="my-6 w-full text-center items-center">
                                    <ul className="grid grid-cols-14c justify-center my-5">{frames(ele.frames)}</ul>
                                    <div className="flex w-full justify-center items-center">
                                        <p className='font-Roboto w-[60%]'>{ele.description2}</p>
                                    </div>
                                </div>
                                <ul className='flex my-6 w-full justify-center'>{Languages(ele.language)}</ul>
                            </div>
                            <div id="button-list">
                                {ele.Live_demo && (
                                    <CustomButton
                                        title="Live Preview"
                                        containerStyles="p-2 rounded-md border border-slate-400 mr-2 hover:bg-black hover:border-none hover:text-white"
                                        src={ele.Live_demo}
                                    />
                                )}
                                <CustomButton
                                    title="Source Code"
                                    containerStyles="p-2 rounded-md border border-slate-400 mr-2 hover:bg-black hover:border-none hover:text-white"
                                    src={ele.sourcecode}
                                />
                            </div>
                        </div>
                    )
                }
                // return <div>No data</div>
            })}
        </div>
    );
};

export default Page;
