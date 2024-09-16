export interface Project {
    name: string;
    description: JSX.Element;
    myRole: JSX.Element;
    year: string;
    links?: {[meta:string]: {videoID?: string, link?: string}};
    funFact?: string[];
    metadata?: {[meta:string] : string[]};
    color?: string;
}