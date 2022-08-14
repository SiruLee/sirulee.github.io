import { useState } from "react";
import "./App.css";
import Navigation from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Education from "./components/edu.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import { useRef } from "react";
var initialDark = false;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  initialDark = true;
} else {
  inititalDark = false;
}
function App() {
  const [index, setIndex] = useState(0);
  const [dark, setDark] = useState(initialDark);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setDark(event.matches ? true : false);
    });
  const initialHeight = useRef();
  const contents = [
    <Profile />,
    <Projects />,
    <Education initialHeight={initialHeight?.current?.clientHeight - 174} />,
    <Contact dark={dark} />,
  ];
  return (
    <div className="App" id={dark ? "dark" : "light"} ref={initialHeight}>
      <Navigation index={index} setIndex={setIndex} />
      {contents[index]}
      <Footer dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
