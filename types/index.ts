import { MouseEventHandler } from "react"

export interface Table {
    name: string,
    front: any[],
    containerStyle?: string
}

export interface CustomButton {
    title: string;
    containerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
}
  
