import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>&copy; {new Date().getFullYear()} My App.</small>
      </footer>
    </>
  );
}

export default App;
