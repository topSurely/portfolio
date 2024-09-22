'use client'
import "./icons.css"
type IconType = "babylonjs" |
    "csharp" |
    "godot" |
    "nestjs" |
    "nextjs" |
    "pixijs" |
    "python" |
    "react" |
    "typeorm" |
    "unity" |
    "unrealengine"
export function Icon({ icon }: { icon: IconType }) {
    return <i className={`sprite`} style={{ backgroundImage: `url(./icons/${icon}.png)`, marginRight: "0.5rem" }} />
}