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
  
