'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import { VRProjects } from "./projects/vr";
import ProjectPage from "./projects/project";
import ModalVideo from "react-modal-video";
import { useEffect, useState } from "react";
import projectStyles from "./projects/project.module.scss"
import { Icon } from "@/utils/icon";
import { NonVRProjects } from "./projects/nonvr";
import { WebProjects } from "./projects/web";
import { Element, scroller } from 'react-scroll'
import { Project } from "./projects/project.interface";
import NoJS from "@/utils/nojs";

enum ProjectSelection {
  VR,
  NonVR,
  Web
}

export default function Home() {
  const [jsEnabled, setJSEnabled] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalVideoID, setVideoID] = useState<string>("");
  const [hoveringMeLink, setHoveringMeLink] = useState<boolean>(false);
  const [selectedProjects, setSelectedProjects] = useState<ProjectSelection | undefined>();
  const [showFunny, setShowFunny] = useState<boolean>(false);
  const OpenModal = (videoID: string) => {
    setModalOpen(true);
    setVideoID(videoID);
  }
  useEffect(() => {
    if (selectedProjects == undefined) return;
    scroller.scrollTo("projectContainer", {
      duration: 150,
      smooth: true,
      delay: 0,
      offset: 0,
    });
  }, [selectedProjects])
  useEffect(() => {
    setJSEnabled(true);
  }, [])
  const RenderProjects = (projects: Project[]) => {
    return projects.sort((a, b) => (b.year + ((b.yearOffset ?? 0) / 100)) - (a.year + ((a.yearOffset ?? 0) / 100))).map((project) => {
      return ProjectPage({ project, modal: OpenModal })
    })
  }
  const VRProjectsElements = RenderProjects(VRProjects);
  const NonVRProjectsElements = RenderProjects(NonVRProjects);
  const WebProjectsElements = RenderProjects(WebProjects);

  return (
    <div className={styles.page}>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        videoId={modalVideoID}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <main className={styles.main}>
        <div className={styles.infobox}>
          <h1>Okay, here goes</h1>
          <p>{"Hello, I'm Jason. I'm a self-taught software developer with industry experience and a passion for video games. I’m skilled at troubleshooting and solving complex problems, always eager to learn and adapt to new challenges. Feel free to explore my work, and reach out at"} <Link href={"mailto:portfolio@surely.mozmail.com"}>portfolio@surely.mozmail.com</Link></p>
        </div>
        <div className={`${styles.infobox}`} style={{ position: "relative" }}>
          <h1>Skills</h1>

          <div className={`${styles.grid} ${styles.skillGrid}`}>
            <div>
              <h2>Languages</h2>
              <ul className="no-bullets">
                <li><Icon icon="react" />Typescript/Javascript</li>
                <li><Icon icon="csharp" />C#</li>
                <li><Icon icon="python" />Python</li>
                <li><Icon icon="godot" />GDScript</li>
              </ul>
            </div>
            <div>
              <h2>Game Engines</h2>
              <ul className="no-bullets">
                <li><Icon icon="unity" />Unity</li>
                <li><Icon icon="godot" />Godot</li>
                <li><Icon icon="unrealengine" />Unreal Engine</li>
              </ul>
            </div>
            <div>
              <h2>Frameworks</h2>
              <ul className="no-bullets">
                <li>
                  <Icon icon="nextjs" />Next.js
                </li>
                <li>
                  <Icon icon="pixijs" />Pixi.js
                </li>
                <li>
                  <Icon icon="babylonjs" />babylon.js
                </li>
                <li>
                  <Icon icon="nestjs" />Nest.js
                </li>
                <li>
                  <Icon icon="typeorm" />TypeORM
                </li>
              </ul>
            </div>
            {showFunny && <div style={{ gridColumn: "span 3", position: "relative" }}>

              <div style={{ position: "absolute", border: "none", pointerEvents: "none", margin: "-1.5rem", padding: "0", width: "100%", height: "100%" }}>

                <img src="./thereIam.jpg" style={{
                  backgroundImage: "URL(./thereIam.jpg)",
                  position: "absolute",
                  opacity: hoveringMeLink ? "1" : "0",
                  transition: "opacity 0.25s", backgroundSize: "contain", backgroundRepeat: "no-repeat", zIndex: "-1000",
                  width: "100%",
                  height: "100%"
                }} />
              </div>
              <span style={{ border: "none", margin: "auto", display: "block", width: "fit-content" }}>
                <h2 className="spinner">🤪</h2>
              </span>
              <ul>
                <li>
                  Screamed into a microphone for the <Link href="https://youtu.be/4suQ2b_q4Cc?t=16" onMouseEnter={() => {
                    setHoveringMeLink(true)
                  }} onMouseLeave={() => {
                    setHoveringMeLink(false)
                  }}>intro to Calgary Underground Film Festival 2023</Link>. It played before every film.
                </li>
                <li>
                  Starred in an <Link href="https://youtu.be/Gktdvz6Qng0?t=11" onMouseEnter={() => {
                    setHoveringMeLink(true)
                  }} onMouseLeave={() => {
                    setHoveringMeLink(false)
                  }}>OPA commercial</Link> as someone who isn't happy to see someone having a better time than me.
                  <ul>
                    <li>I had much longer hair at that time</li>
                  </ul>
                </li>
              </ul>

            </div>}
          </div>
          <p style={{ position: "absolute", bottom: "0", right: "0", fontSize: "7px" }} onClick={() => {
            setShowFunny(true)
          }}>???</p>
        </div>
        <div className={styles.infobox}>
          <h1>Projects</h1>
          <div className={styles.grid} style={(!jsEnabled ? { display: "none" } : undefined)}>
            <div onClick={() => setSelectedProjects(ProjectSelection.VR)} className={styles.clickable}>
              <h2>VR</h2>
            </div>
            <div onClick={() => setSelectedProjects(ProjectSelection.NonVR)} className={styles.clickable}>
              <h2>Non-VR</h2>
            </div>
            <div onClick={() => setSelectedProjects(ProjectSelection.Web)} className={styles.clickable}>
              <h2>Web</h2>
            </div>
          </div>
        </div>
        <Element name="projectContainer">        </Element>
        {selectedProjects != undefined && <div className={projectStyles.projectsContainer}>
          {selectedProjects == ProjectSelection.VR && VRProjectsElements}
          {selectedProjects == ProjectSelection.NonVR && NonVRProjectsElements}
          {selectedProjects == ProjectSelection.Web && WebProjectsElements}
        </div>}
        {<NoJS />}
        {selectedProjects == undefined && <div style={{ paddingBottom: "10rem" }} />}

      </main>
    </div>
  );
}