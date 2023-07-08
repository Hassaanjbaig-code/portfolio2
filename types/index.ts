export interface Table {
    name: string,
    front: any[],
    containerStyle?: string
}

export interface CustomButton {
    title: string;
    containerStyles: string;
    btnType?: 'button' | 'submit';
    src: string | null
}

export interface Personal_link{
    id: number,
    name: string,
    src: string,
    image: string
}
