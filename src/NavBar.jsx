import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ data }) {
    return (
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            {data.map((item) => {
                return <NavLink key={item.id} to={item.header}>{item.header}</NavLink>
            })}
        </nav>
    )
}

export default NavBar;