import { useState } from "react";
import "./App.css";
import Navigation from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Education from "./components/edu.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

function App() {
  const [index, setIndex] = useState(0);
  const [dark, setDark] = useState(false);
  const contents = [<Profile />, <Projects />, <Education />, <Contact />];
  return (
    <div className="App" id={dark ? "dark" : "light"}>
      <Navigation index={index} setIndex={setIndex} />
      {contents[index]}
      <Footer dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
