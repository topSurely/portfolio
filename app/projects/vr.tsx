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
        year: 2018,
        funFact: ["The Elder had to speak the same lines in 3 different ways so we could randomize the order of a certain puzzle.", "This is still my favorite game we made for the Oculus Go. The headset's controller only had a gyroscope, a touch pad, a trigger, and a back button, and we utilized all of it throughout the project finding joy in the limitation."],
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
        year: 2018,
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
            </ul>
        </div>,
        year: 2018,
        funFact: ["We had 3 different voicelines depending on outcome. If you did poorly, you would be called a 'rookie farmer' which stuck around as an inside joke.", "We ended up redeveloping the game to be played on touch screens. I developed this in about 2 weeks in Construct2 as that was something I happened to know quite well at the time, and this version of the game is still shown at the Calgary Stampede."],
        metadata: {
            "Engine": ["Unreal Engine 4"],
            "Language": ["Blueprints"],
            "Platform": ["Virtual Reality", "Oculus Rift"],
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
        year: 2019,
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
    }
]
