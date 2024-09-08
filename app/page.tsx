import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
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
                <li>Typescript/Javascript</li>
                <li>C#</li>
                <li>Python</li>
                <li>GDScript</li>
              </ul>
            </div>
            <div>
              <h2>Game Engines</h2>
              <ul>
                <li>Unity</li>
                <li>Godot</li>
                <li>Unreal Engine</li>
              </ul>
            </div>
            <div>
              <h2>Frameworks</h2>
              <ul>
                <li>
                  Next.js
                </li>
                <li>
                  Pixi.js
                </li>
                <li>
                  babylon.js
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.infobox}>
          <h1>Projects</h1>
          <div className={styles.grid}>
            <div>
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
      </main>
    </div>
  );
}
