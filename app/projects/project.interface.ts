export interface Project {
    name: string;
    description: JSX.Element;
    myRole: JSX.Element;
    year: number;
    yearOffset?: number;
    yearOverride?: string;
    links?: {[meta:string]: {videoID?: string, link?: string}};
    funFact?: string[];
    metadata?: {[meta:string] : string[]};
    color?: string;
    awards?: {presenter: string, award:string, year: number}[];
}