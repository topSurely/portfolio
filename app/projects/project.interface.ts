export interface Project {
    name: string;
    description: JSX.Element;
    myRole: JSX.Element;
    year: string;
    links?: {[meta:string]: {videoID: string, modal?:boolean} | string};
    funFact?: string[];
    metadata?: {[meta:string] : string[]}
    localVideo?: {[meta:string]: string};
}