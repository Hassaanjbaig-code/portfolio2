export interface Table {
    name: string,
    front: any[],
    containerStyle?: string
}

export type ProjectData = {
    id: number;
    title: string;
    frames: [string, string, number];
    Image: string;
    description: string;
    description2: string;
    language: string[];
    sourcecode?: string;
    Urls?: string;
    Live_demo: string;
};