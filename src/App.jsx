import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import "./App.css";
import NavigateBackButton from "./NavigateBackButton";

function App() {
  return (
    <div className="App">
      <div className="AppMain">
        <NavBar />
        <Outlet />
      </div>
      <NavigateBackButton />
    </div>
  )
}

export default App
