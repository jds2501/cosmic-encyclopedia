import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Mars">Mars</NavLink>
            <NavLink to="/Venus">Venus</NavLink>
            <NavLink to="/OrionNebula">Orion Nebula</NavLink>
            <NavLink to="/AndromedaGalaxy">Andromeda Galaxy</NavLink>
        </nav>
    )
}

export default NavBar;