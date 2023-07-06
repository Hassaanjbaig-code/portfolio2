"use client";

import Image from "next/image";
import { CustomButton } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButton) => {
  return (
    <button
        type={btnType || 'button'}
        className={containerStyles}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton