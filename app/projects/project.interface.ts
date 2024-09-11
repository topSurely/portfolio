export interface Project {
    name: string;
    description: JSX.Element;
    myRole: JSX.Element;
    year: string;
    links?: {[meta:string]: string};
    funFact?: string[];
    metadata?: {[meta:string] : string[]}
    localVideo?: {[meta:string]: string};
}