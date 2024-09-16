'use client'
import { Project } from "./project.interface";
import styles from "./project.module.scss"
export default function ProjectPage({ project, modal }: { project: Project, modal?: (videoID: string) => void }) {
    const links = (): JSX.Element => {
        if (!project.links) return <></>
        const keys = Object.keys(project.links)
        return (<ul>

            {keys.map((value) => {
                if (!project.links) return <></>
                const modalID = project.links[value].videoID
                const link = modalID ? undefined : project.links[value].link
                return <li><a href={link ?? undefined} target="_blank" rel="noopener noreferrer" onClick={() => {
                    modalID && modal && modal(modalID)
                }}>{value}</a></li>
            })}
        </ul>)
    }
    const metadata = (): JSX.Element => {
        if (!project.metadata) return <></>
        const keys = Object.keys(project.metadata)
        return (
            <table>
                <thead>
                    <tr>
                        {keys.map((value) => {
                            return <th>{value}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {keys.map((value) => {
                            if (!project.metadata) return <></>
                            return <td>{project.metadata[value].join(", ")}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        )
    }
    return (<div className={styles.projectBox} style={{ borderColor: project.color }}>
        <div><h1 style={{ color: project.color }}>{project.name}</h1></div>
        <h3>Year: {project.year}</h3>
        {project.description}
        {project.myRole}
        <h3>Links</h3>
        {project.links && links()}
        <div>
            {metadata()}
        </div>
    </div >)
}