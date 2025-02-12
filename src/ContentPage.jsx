import { useParams } from "react-router";
import NotFound from "./NotFound";

class CelestialObject {
    constructor(header, description) {
        this.header = header;
        this.description = description;
    }
}

const celestialObjects = {
    "Mars": new CelestialObject("Mars", `Known for the Red Planet, Mars has fascinated humans for centuries.
        It is home to highest mountain in the solar system, Olympus Mons, and evidence suggests
        water once flowed on its surface.`),
    "Venus": new CelestialObject("Venus", `Venus, our closest planetary neighbor, is shrouded in thick clouds
        of sulfuric acid, making it a hostile environment. Its surface tempoeratures are hot enough to melt
        lead.`),
    "AndromedaGalaxy": new CelestialObject("Andromeda Galaxy", `The Andromeda Galaxy (M31) is the closest spiral
        galaxy to the Milky Way, located about 2.5 million light-years away, and is on a collision course 
        with our galaxy in roughly 4.5 billion years.`),
    "OrionNebula": new CelestialObject("Orion Nebula", `Located in the constellation of Orion, the Orion Nebula
        is a vibrant nursery where new stars are born. It is one of the brighest nebulae visible in the
        naked eye in the night`)
}


function ContentPage() {
    const params = useParams();

    if (!celestialObjects[params.id]) {
        return <NotFound />
    }

    return (
        <>
            <h1>{celestialObjects[params.id].header}</h1>
            <p>{celestialObjects[params.id].description}</p>
        </>
    )
}

export default ContentPage;