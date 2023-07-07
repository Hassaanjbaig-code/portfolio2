"use client";

import Image from "next/image";
import { CustomButton } from "@/types";

const CustomButton = ({ title, containerStyles, btnType, src }: CustomButton) => {
    return (
        <>
            {src !== null && (
            <button
                type={btnType || 'button'}
                className={containerStyles}
            // onClick={handleClick}
            >
                <a href={src}>{title}</a>
            </button>
            )}
        </>
    )
}

export default CustomButton