import { Project } from "./project.interface";

export const VRProjects: Project[] = [
    {
        name: "Experience the Energy: Take The Challenge",
        description:
            <div>
                <p>A series of immersive minigames for the Oculus Go designed to test skills and suggest potential occupations in the oil and gas industry to transitioning workers.</p>
            </div>,
        myRole:
            <div>
                <ul>
                    <li>Minigame Design and Development</li>
                    <li>Asset importing</li>
                </ul>
            </div>,
        year: 2019,
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Go"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Product Page": "https://mammothxr.com/archive/petroLMI-challenge.html",
            "Experience Trailer": "https://youtu.be/QiPbWEnq504",
        }
    },
    {
        name: "Experience the Energy: Future Skills",
        description:
            <div>
                <p>
                    {`A sequel to "Take the Challenge" but for the Oculus Quest (now Meta Quest). This was a fully new effort that also included fully 3D in engine educational segments.`}
                </p>
            </div>,
        myRole:
            <div>
                <ul>
                    <li>Minigame Design and Development</li>
                    <li>Asset Cleanup and Importing</li>
                    <li>Development of Utilities for educational segment creation:
                        <ul>
                            <li>
                                Custom Unity Director Asset to control the movement of our host NPC Appo without extensive scripting and being able to preview their position without having to run the scene.
                            </li>
                            <li>
                                Assistance with rigging
                            </li>
                            <li>Materials and Shaders for educational segments using Shader Graph</li>
                        </ul>
                    </li>
                </ul>
            </div>,
        year: 2020,
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Quest", "Meta Quest"],
        }
    }
]
