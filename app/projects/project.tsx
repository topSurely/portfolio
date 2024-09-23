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
                return <li key={project.name + value}><a href={link ?? undefined} target="_blank" rel="noopener noreferrer" onClick={() => {
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
                            return <th key={project.name + value}>{value}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {keys.map((value) => {
                            if (!project.metadata) return <></>
                            return <td key={project.name + value + "meta"}>{project.metadata[value].join(", ")}</td>
                        })}
                    </tr>
                </tbody>
            </table>
        )
    }
    const awards = (): JSX.Element => {
        if (!project.awards) return <></>
        return (
            <table>
                <thead>
                    <tr>
                        <th>Award</th>
                        <th>Presenter</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {project.awards.map((award) => {
                        return <tr>
                            <td>{award.award}</td>
                            <td>{award.presenter}</td>
                            <td>{award.year}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
    return (<div className={styles.projectBox} style={{ borderColor: project.color }} key={"project" + project.name}>
        <div><h1 style={{ color: project.color }}>{project.name}</h1></div>
        <h3>Year: {project.yearOverride ?? project.year}</h3>
        {project.description}
        <h3>My Role:</h3>
        {project.myRole}
        {project.links && <h3>Links</h3>}
        {project.links && links()}
        {project.funFact && (project.funFact.length > 1 ? <h3>Fun Facts:</h3> : <h3>Fun Fact</h3>)}
        {project.funFact && <ul>
            {project.funFact.map((fact, i) => {
                return <li key={project.name + "fact" + i}>{fact}</li>
            })}
        </ul>}

        {project.awards && <div className={styles.awards}>
            <h3>🏆Awards🏆</h3>
            {awards()}
        </div>}
        <div>
            {metadata()}
        </div>
    </div >)
}