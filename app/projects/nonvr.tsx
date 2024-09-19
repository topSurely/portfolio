import { Project } from "./project.interface";
const template: Project = {
    name: "project name",
    description: <div></div>,
    myRole: <div></div>,
    year: "2017",
    metadata: {
        "Engine": ["Unity"],
        "Language": ["C#"],
        "Platform": ["Virtual Reality", "Oculus Go"],
        "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
    },
    links: {
        "Product Page": {},
        "Experience Trailer": {},
    }
}
export const NonVRProjects: Project[] = [
    {
        name: "Safety Train",
        description:
            <div>
                <p>A multiplayer </p>
            </div>,
        myRole:
            <div>
                <p>At this time I was the sole Programmer and was the only person developing this project. Everything in engine was exclusively my work, including scene setup, asset preperation,  importing, and implementation.</p>
                <ul>
                    <li>Game Design and Development</li>
                    <li>Asset Importing</li>
                </ul>
            </div>,
        year: "2018",
        funFact: ["The Elder had to speak the same lines in 3 different ways so we could randomize the order of a certain puzzle.", "This is still my favorite game we made for the Oculus Go. The headset's controller only had a gyroscope, a touch pad, a trigger, and a back button. We utilized all of it throughout the project finding joy in the limitation."],
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Go"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Experience Trailer": { videoID: "bTLDkTXF-Mw" },
        },
        color: "#0090FF"
    }
]
