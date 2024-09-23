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
  useEffect(() => {
    if (selectedProjects == undefined) return;
    scroller.scrollTo("projectContainer", {
      duration: 150,
      smooth: true,
      delay: 0,
      offset: 0,
    });
  }, [selectedProjects])
  const RenderProjects = (projects: Project[]) => {
    return projects.sort((a, b) => b.year - a.year).map((project) => {
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
          <p>{"Hello, I'm Jason. I am a dedicated and passionate software developer that really really likes video games. I am recognized by my peers for troubleshooting and have a real knack for solving roadblocks. If I don't know the answer, I will persevere and research until I find the solution. I am a quick learner and most of my skills are self taught. I enjoy the creative process and small details are extremely  important to me and I like to add my own additional touches whenever possible. Please browse around, and feel free to ask me anything at"} <Link href={"mailto:portfolio@surely.mozmail.com"}>portfolio@surely.mozmail.com</Link></p>
        </div>
        <div className={`${styles.infobox}`}>
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
          </div>
        </div>
        <div className={styles.infobox}>
          <h1>Projects</h1>
          <div className={styles.grid}>
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
        {selectedProjects == undefined && <div style={{ paddingBottom: "10rem" }} />}


      </main>
    </div>
  );
}