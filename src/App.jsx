import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import "./App.css";
import NavigateBackButton from "./NavigateBackButton";

function App({ data }) {
  return (
    <div className="App">
      <div className="AppMain">
        <NavBar data={data} />
        <Outlet />
      </div>
      <NavigateBackButton />
    </div>
  )
}

export default App
