import { Project } from "./project.interface";

export const WebProjects: Project[] = [
    {
        name: "Lion Gaming Group",
        description:
            <div>
                <p>A web crypto casino built with Lion Gaming Group technologies.</p>
            </div>,
        myRole:
            <div>
                <p>We were meant to be doing game development but were needed for assistance on a new web project. I had never done web development previously</p>
                <ul>
                    <li>Implementing Stream.io chat features</li>
                    <li>Adding a role system to allow users to have various roles.</li>
                    <li>Working on a Next-Gen version of the site switching from PHP to Next.js</li>
                </ul>
            </div>,
        year: 2023,
        metadata: {
            "Frameworks": ["Next.js", "Nest.js", "nodejs", "getStream.io", "TypeORM"],
            "Language": ["PHP", "React/Typescript"],
            "Other skills": ["Troubleshooting"]
        },
        color: "#FF6C00"
    },
    {
        name: "Lion Gaming Group - Next Gen Casino",
        description:
            <div>
                <p>A full rebuild of Lion Gaming Group's games using existing game APIs and creating new ones using Node.js</p>
            </div>,
        myRole:
            <div>
                <p>I ended up being the sole backend developer on this project</p>
                <ul>
                    <li>
                        Implementing existing APIs and creating an extensive local game client making API requests easy to handle
                    </li>
                    <li>Creating new games including Plinko, Dice, and Keno
                        <ul><li>
                            Creating the first steps towards a provably fair system allowing users to recreate the result clientside after being provided the seed by the server.
                        </li></ul>
                    </li>
                    <li>Creating a renderer to recreate the result of the plinko simulation locally on a client with fun animations using Pixi.js</li>
                    <li>
                        Creating reusable React components for use across the games
                    </li>
                    <li>Implementing Lottie animations for use in the UI</li>
                </ul>
            </div>,
        year: 2023,
        yearOverride: "2023-Ongoing",
        metadata: {
            "Frameworks": ["Next.js", "Nest.js", "getStream.io", "TypeORM", "Pixi.js", "Lottie"],
            "Language": ["React/Typescript"],
            "Other skills": ["Troubleshooting"]
        },
        color: "#0060FF"
    }
]