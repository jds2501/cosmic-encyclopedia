import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App"
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";

const root = document.getElementById("root");

class CelestialObject {
  constructor(header, description) {
    this.id = crypto.randomUUID();
    this.header = header;
    this.description = description;
  }
}

const celestialObjects = [
  new CelestialObject("Mars", `Known for the Red Planet, Mars has fascinated humans for centuries.
        It is home to highest mountain in the solar system, Olympus Mons, and evidence suggests
        water once flowed on its surface.`),
  new CelestialObject("Venus", `Venus, our closest planetary neighbor, is shrouded in thick clouds
        of sulfuric acid, making it a hostile environment. Its surface tempoeratures are hot enough to melt
        lead.`),
  new CelestialObject("Orion Nebula", `Located in the constellation of Orion, the Orion Nebula
        is a vibrant nursery where new stars are born. It is one of the brighest nebulae visible in the
        naked eye in the night`),
  new CelestialObject("Andromeda Galaxy", `The Andromeda Galaxy (M31) is the closest spiral
        galaxy to the Milky Way, located about 2.5 million light-years away, and is on a collision course 
        with our galaxy in roughly 4.5 billion years.`)
]

const children = celestialObjects.map((celestialObject) => {
  return {
    path: `/${celestialObject.header}`,
    element: <ContentPage data={celestialObject} />,
  }
})

children.push({
  index: true,
  element: <HomePage />
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App data={celestialObjects} />,
    children: children,
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
