'use client'
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
export const VRProjects: Project[] = [
    {
        name: "Nutrients for Life",
        description: <div><p>
            An educational game for children designed to be shown at trade shows and fairs to teach them about how their food is made and where it comes from. The game involves keeping all nutrient meters in the middle; not too much, not too little. Depending on how much you used you would be scored in three different categories. </p> </div>,
        myRole: <div>
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
            "Product Page": { link: "https://mammothxr.com/archive/nutrients-for-life.html" },
            "Experience Trailer": { videoID: "FFViE-2mEiA" },

        },
        color: "#2CB029"
    },
    {
        name: "Thunder VR",
        description:
            <div>
                <p>{"An immersive experience telling the story of Thunder (Ksiistsikom) as the player searches for their wife. Players would learn simple words in Blackfoot and narrated by an authentic Blackfoot Elder, Saakokoto. Blackfoot is considered to be an 'endangered' language, so the creation of this game was also considered to be a preservation project."}</p>
            </div>,
        myRole:
            <div>
                <p>At this time I was the sole Programmer and was the only person developing this project. Everything in engine was handled by myself, including scene setup, asset preperation, importing, and implementation.</p>
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
            "Product Page": { link: "https://mammothxr.com/archive/thunder.html" },
            "Experience Trailer": { videoID: "TsZSh8OiKZE" },
        },
        color: "#0090FF"
    },
    {
        name: "Lenica Escape Room",
        description: <div><p>
            Part of a research project with Lenica Research Group we developed a series of minigames in the theme of an escape room for the purpose of assisting people who have suffered a brain injury such as a stroke or concussion.
        </p></div>,
        myRole: <div><p>
            I developed all the minigames and functionality for this project, including a trace by numbers game, a flashing light sequence, and a password solving game where you had to pick the letter of the corresponding currently playing instrument.
        </p></div>,
        year: "2018",
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Go"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Product Page": { link: "https://mammothxr.com/archive/lenica-escape.html" },
        },
        color: "#FF7E00"
    },
    {
        name: "Experience the Energy: Take The Challenge",
        description:
            <div>
                <p>A series of immersive minigames for the Oculus Go designed to test skills and suggest potential occupations in the oil and gas industry to transitioning workers.</p>
            </div>,
        myRole:
            <div>
                <p>I was the sole developer on this project for the Oculus Go portion. It was later ported to the Quest, but I was not involved in that aspect.</p>
                <ul>
                    <li>Minigame Design and Development</li>
                    <li>Asset importing</li>
                </ul>
            </div>,
        year: "2019",
        funFact: ["We added a level selector to more easily test the games. It was accessed by mashing the second E, and entering the level selector would play a long reverberating recording of myself saying the letter E dramatically. I was under the impression this would be a fun internal easter egg, but was later told our client asked for a way to access a level selector and they were given this secret information and heard the E.",
            "All the games had unique gameplay. My favorite is one where you have to read a board and see what guage needs to be set to what. You then had to teleport around hallways to find the guages needing changing, and you had to point at them, pull the trigger, and physically rotate the controller to turn the guage."],
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Go"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting"]
        },
        links: {
            "Product Page": { link: "https://mammothxr.com/archive/petroLMI-challenge.html" },
            "Experience Trailer": { videoID: "QiPbWEnq504" },
        },
        color: "#29A2B0"
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
            "Product Page": { link: "https://www.meta.com/experiences/experience-the-energy-adapting-futures/24905470952402292/" },
            "Experience Trailer": { videoID: "Bp7zRXK1Yds" },
        },
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Quest", "Meta Quest"],
            "Other skills": ["Asset Prep and Cleanup in Blender", "Troubleshooting"]
        },
        color: "#E6E823"
    },
    {
        name: "Glacier",
        year: "2020",
        description: <div>
            <p>Created for Telus Spark Science Center, this was meant to be an experience to allow visitors to experience sliding into a crevasse with narration written by an unfortunate hiker who thankfully survived such an event.</p>
            <p>This project was unfortunately cancelled due to COVID-19 as people were going to be less willing to share a VR headset with strangers.</p>
        </div>,
        myRole: <div>
            <p>I was the sole programmer on this project.</p>
            <ul>
                <li>
                    Created a movement system that allowed the player to move forward by striking the poles into the ground. This involved the following:
                    <ul>
                        <li>Poles that have a slight need to actually be planted in the snow with some angle allowance.</li>
                        <li>Moving the pole while it's planted actually moves you forward</li>
                        <li>The character in the world actually replicates your movements using IK</li>
                    </ul>
                </li>
                <li>
                    I happened to have the exertise to actually import the terrain of the actual location into the game
                </li>
                <li>
                    As this was running on mobile hardware, the environment couldn't be too large. I ended up implementing a seperate "3D Skybox" inspired by Half Life 2 so we could have a much larger environment during the fly-in.
                </li>
            </ul>

        </div>,
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Rift"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting", "Shader Graph"]
        },
        links: {
            "Playthrough": { videoID: "kLQodrWMQWQ", },
        },
        funFact:
            ["When the player falls into the crevasse I actually made them drop the sticks and turn into physics objects. No one noticed.", "It's not a misspelling, a crevice is different from a crevasse. "]
        ,
        color: "#79E7FF"
    },
    {
        name: "Second Spirit",
        description: <div>
            <p>
                This was meant to be a full immersive VR story game made with USAY about a character named Twig escaping the oppression of the outsider Skritans. The prototype showcases the ability for the player to turn into Twig's guardian, pick up a weapon, and switch between the two modes as well as teleport around the environment with hints on what to do next.
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
                    </ul>
                </li>
            </ul>
        </div>,
        year: "N/A",
        metadata: {
            "Engine": ["Unity"],
            "Language": ["C#"],
            "Platform": ["Virtual Reality", "Oculus Rift"],
            "Other skills": ["Asset Prep in Blender", "Troubleshooting", "Shader Graph"]
        },
        links: {
            "Playthrough": { videoID: "5DGITYlJ0EE", },
            "Trailer": { videoID: "2zmvSa8roYA", }
        },
        color: "#E86423"
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
                    Developing a couple of the experiences and helping with some others.
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
            "Meta Product Page": { link: "https://www.meta.com/en-gb/experiences/jordan-jones-dies-in-space/4494213844005443/" },
            "Playthrough": { videoID: "p6bTAy5ZW1A" }
        },
        color: "#09E5FF"
    },
]
