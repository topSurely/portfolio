export interface Project {
    name: string;
    description: JSX.Element;
    myRole: JSX.Element;
    year: number;
    links?: {[meta:string]: string};
    funFact?: string[];
    metadata?: {[meta:string] : string[]}
}