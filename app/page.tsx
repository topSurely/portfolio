'use client'
import styles from "./page.module.scss";
import Link from "next/link";
import { VRProjects } from "./projects/vr";
import ProjectPage from "./projects/project";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import projectStyles from "./projects/project.module.scss"
import { Icon } from "@/utils/icon";

enum ProjectSelection {
  VR,
  NonVR,
  Web
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalVideoID, setVideoID] = useState<string>("")
  const [selectedProjects, setSelectedProjects] = useState<ProjectSelection | undefined>();
  const OpenModal = (videoID: string) => {
    setModalOpen(true);
    setVideoID(videoID);
  }
  const VRProjectsElements = VRProjects.map((project) => {
    return ProjectPage({ project, modal: OpenModal })
  })

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
          <p>{"Hello, I'm Jason. I'm a dedicated and passionate software developer that really really likes video games. I have quite the knack for troubleshooting, I'm a very quick learner, and I don't like not knowing things. I like making things and obsess over small details and like to add my own whenever I can. Please browse around, and feel free to ask me anything at"} <Link href={"mailto:portfolio@surely.mozmail.com"}>portfolio@surely.mozmail.com</Link></p>
        </div>
        <div className={`${styles.infobox}`}>
          <h1>Skills</h1>
          <div className={`${styles.grid} ${styles.skillGrid}`}>
            <div>
              <h2>Languages</h2>
              <ul>
                <li><Icon icon="react" />Typescript/Javascript</li>
                <li><Icon icon="csharp" />C#</li>
                <li><Icon icon="python" />Python</li>
                <li><Icon icon="godot" />GDScript</li>
              </ul>
            </div>
            <div>
              <h2>Game Engines</h2>
              <ul>
                <li><Icon icon="unity" />Unity</li>
                <li><Icon icon="godot" />Godot</li>
                <li><Icon icon="unrealengine" />Unreal Engine</li>
              </ul>
            </div>
            <div>
              <h2>Frameworks</h2>
              <ul>
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
          </div>
        </div>
        <div className={styles.infobox}>
          <h1>Projects</h1>
          <div className={styles.grid}>
            <div onClick={() => setSelectedProjects(ProjectSelection.VR)}>
              <h2>VR</h2>
            </div>
            <div>
              <h2>Non-VR</h2>
            </div>
            <div>
              <h2>Web</h2>
            </div>
          </div>
        </div>
        {selectedProjects != undefined && <div className={projectStyles.projectsContainer}>
          {selectedProjects == ProjectSelection.VR && VRProjectsElements}
        </div>}
        {selectedProjects == undefined && <div style={{ paddingBottom: "10rem" }} />}
      </main>
    </div>
  );
}