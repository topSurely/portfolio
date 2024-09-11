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
        "Product Page": "",
        "Experience Trailer": "",
    }
}
export const VRProjects: Project[] = [
    {
        name: "Thunder VR",
        description:
            <div>
                <p>{"An immersive experience telling the story of Thunder (Ksiistsikom) as the player searches for their wife. Players would learn simple words in Blackfoot and narrated by an authentic Blackfoot Elder, Saakokoto. Blackfoot is considered to be an 'endangered' language, so "}</p>
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
            "Product Page": "https://mammothxr.com/archive/thunder.html",
            "Experience Trailer": "https://youtu.be/TsZSh8OiKZE",
        }
    },
    {
        name: "Lenica Escape Room",
        description: <div></div>,
        myRole: <div></div>,
        year: "2018",
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Go"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Product Page": "https://mammothxr.com/archive/lenica-escape.html",
        }
    },
    {
        name: "Nutrients for Life",
        description: <div><p>
            An educational game for children designed to be shown at trade shows and fairs to teach them about how their food is made and where it comes from. The game involves keeping all nutrient meters in the middle; not too much, not too little. Depending on how much you used you would be scored in three different categories. </p> </div>,
        myRole: <div>
            <p>At this time I was the sole Programmer and was the only person developing this project. Everything in engine was exclusively my work, including scene setup, asset preperation,  importing, and implementation.</p>
            <p>This was my first real 'game' project. Previous to this I had worked exclusively on VR video players for various events. My excitement at that time was for Unreal Engine 4 and as a desktop only experience I wanted to use the more high powered engine, but due to not knowing C++ and the relatively short timeline on this project we instead went all in on Blueprints.</p>
            <ul>
                <li>
                    Game Design and Development
                </li>
                <li>
                    Asset Importing
                </li>
                <li>Handling Steam Deployment</li>
            </ul>
        </div>,
        year: "2018",
        funFact: ["We ended up redeveloping the game to be played on touch screens. I developed this in about 2 weeks in Construct2 as that was something I happened to know quite well at the time, and this version of the game is still shown at the Calgary Stampede."],
        metadata: {
            "Engine": ["Unreal Engine 4", "Construct2"],
            "Language": ["Blueprints"],
            "Platform": ["Virtual Reality", "Installation", "Oculus Rift", "Touch Screen"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Product Page": "https://mammothxr.com/archive/nutrients-for-life.html",
            "Experience Trailer": "https://youtu.be/FFViE-2mEiA",
        }
    },
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
        year: "2019",
        funFact: ["We added a level selector to more easily test the games. It was accessed by mashing the second E, and entering the level selector would play a long reverberating recording of myself saying the letter E dramatically."],
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
        name: "Experience the Energy: Adapting Futures",
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
                    <li>Development of Utilities for educational segment creation using the Unity Director:
                        <ul>
                            <li>
                                Custom Unity Director Asset to control the movement of our host NPC Appo without extensive scripting and being able to preview their position without having to run the scene.
                            </li>
                            <li>Assistance with asset pipeline and general Unity implementation.</li>
                            <li>
                                Assistance with rigging
                            </li>
                            <li>Materials and Shaders for educational segments using Shader Graph</li>
                        </ul>
                    </li>
                    <li>Handling Steam Deployment</li>
                </ul>
            </div>,
        year: "2020",
        links: {
            "Product Page": "https://www.meta.com/experiences/experience-the-energy-adapting-futures/24905470952402292/",
            "Experience Trailer": "https://youtu.be/Bp7zRXK1Yds",
        },
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Quest", "Meta Quest"],
            "Other skills": ["Asset Prep and Cleanup in Blender", "Troubleshooting"]
        }
    },
    {
        name: "Jordan Jones Dies in Space",
        description: <div><p>Jordan Jones gets stranded in space after their ship performs an emergency jump. As they slowly lose oxygen the player journeys through their memories set in the void of space.</p><p>This was MAMMOTH XR's only solo project.</p></div>,
        myRole: <div>
            <ul>
                <li>
                    Setting up an elaborate scenario manager that allowed us to create each experience as an individual scene. This made testing each scene individually much easier and made it simpler to rearrange the experience as needed.
                </li>
                <li>
                    Creating a system allowing artists to implement motion graphics on the HUD in game.
                </li>
                <li>
                    {"Creating a movement system allowing for full three dimensional movement with ease, comfort, and even two different movement options."}
                </li>
                <li>Meta Store Deployment</li>
            </ul></div>,
        year: "2022",
        funFact: ["We ended up having to aggressively downscale much of the game's graphics and effects to make it run on the Quest 1. Meta removed the Quest 1 requirements a few months after release."],
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Meta Quest"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Meta Product Page": "https://www.meta.com/en-gb/experiences/jordan-jones-dies-in-space/4494213844005443/",
        }
    },
    {
        name: "Second Spirit",
        description: <div>
            <p>

            </p>
            <p>
                The project was unfortunately cancelled, but we still developed a full prototype for funding purposes.
            </p>
        </div>,
        myRole: <div>
            <p>As this was a small demo, I was assigned as the sole developer. Despite this, we still overshot scope but pulled off something very nice.</p>
            <ul>
                <li>
                    Implenting all game features, including:
                    <ul>
                        <li>
                            A pop-up/pop-down player scaling system that allowed you to get a better look at the field.
                        </li>
                        <li>
                            A teleportation system based on pads that exist in the world that you could use by placing Twig nearby.
                        </li>
                        <li>
                            Navigating Twig, the main character using a precalculated navmesh while still ensuring direct and satisfying control via influencing where Twig would go via the control stick.
                        </li>
                        <li>
                            Roko, a bear that lives on your arm, that you could throw to solve puzzles. It used precalculated physics to ensure consistency and no direct need for accuracy or skill while still giving full control to the player, and had various hiding spots that it would navigate to in order to despawn.
                        </li>
                        <li>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>,
        year: "😩",
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Rift"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting", "Shader Graph"]
        },

    }
]
