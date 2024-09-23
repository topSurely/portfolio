import { NonVRProjects } from "@/app/projects/nonvr";
import ProjectPage from "@/app/projects/project";
import { Project } from "@/app/projects/project.interface";
import { VRProjects } from "@/app/projects/vr";
import { WebProjects } from "@/app/projects/web";
import projectStyles from "@/app/projects/project.module.scss"

export default function NoJS() {
    const RenderProjects = (projects: Project[]) => {
        return projects.sort((a, b) => (b.year + ((b.yearOffset ?? 0) / 100)) - (a.year + ((a.yearOffset ?? 0) / 100))).map((project) => {
            return ProjectPage({ project })
        })
    }
    const VRProjectsElements = RenderProjects(VRProjects);
    const NonVRProjectsElements = RenderProjects(NonVRProjects);
    const WebProjectsElements = RenderProjects(WebProjects);
    return <noscript>

        <img src="./nojs.jpg" style={{ margin: "auto", display: "block", width: "8rem", marginBottom: "2rem" }} />
        <h2 style={{ textAlign: "center" }}>VR</h2>
        <div className={projectStyles.projectsContainer}>
            {VRProjectsElements}
        </div>

        <h2 style={{ textAlign: "center" }}>Non-VR</h2>
        <div className={projectStyles.projectsContainer}>
            {NonVRProjectsElements}
        </div>
        <h2 style={{ textAlign: "center" }}>Web</h2>
        <div className={projectStyles.projectsContainer}>
            {WebProjectsElements}
        </div>
    </noscript>
}