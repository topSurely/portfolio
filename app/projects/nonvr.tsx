import { Project } from "./project.interface";
const template: Project = {
    name: "project name",
    description: <div></div>,
    myRole: <div></div>,
    year: 2017,
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
                <p>A multiplayer train driving game where you explore multiple environments reflecting the sights of Saskatchewan. The game involves answering various trivia questions about trains and train safety, doing so removes cargo from your train and allows you to move faster. Whoever gets to the end wins!</p>
            </div>,
        myRole:
            <div>
                <ul>
                    <li>Locomotive simulation</li>
                    <li>Efficient track generation and path following</li>
                    <li>Rigging the cars to allow the wheels to move independently from the cars</li>
                    <li>An aggressively optimized world loading system to avoid stuttering between players as they could each be in a different zone at the same time while running on different PCs.</li>
                    <li>Cinematic camera switcher to showcase the environment as much as possible</li>
                </ul>
            </div>,
        year: 2022,
        funFact: ["I went way too hard on the locomotive simulation. Each of the cars actually does add weight and affects acceleration and braking speeds, and I actually have the locomotive start braking based on its current distance to the next stop. No one noticed or cared.", "Expanding on environment optimization, this issue came up rather close to the end of the wire as we couldn't have all locales loaded at the same time without putting stress on the gpu, and since we were rendering up to 3 different perspectives on the same machine (which was actually meant to be 3 different machines originally) this would mean that simply enabling the new environment would cause a hitch for all the other players. I ended up creating a rather hacky solution where I created an array of all the objects across each scene, and when a player enters a new scene it enables all the objects over the span of a few seconds. Once a player exits, it steadily disables all the objects again (provided there are no other players in the area). This made sure there was no hitching and lead to a smooth experience."],
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Desktop Installation"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Gameplay Example": { videoID: "bTLDkTXF-Mw" },
        },
        color: "#EF5252"
    }
]
