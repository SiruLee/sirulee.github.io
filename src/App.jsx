import { useState, useRef } from "react";
import "./App.css";
import Navigation from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Profile from "./components/profile.jsx";
import Education from "./components/edu.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
var initialDark = false;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  initialDark = true;
} else {
  initialDark = false;
}
var initialIndex = parseInt(localStorage.getItem("index")) || 0;
function App() {
  const [index, setIndex] = useState(initialIndex);
  const [dark, setDark] = useState(initialDark);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setDark(event.matches ? true : false);
    });
  const initialHeight = useRef();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname == "/profile")
      setIndex(0);
    else if (location.pathname === "/projects") setIndex(1);
    else if (location.pathname === "/education") setIndex(2);
    else if (location.pathname === "/contact") setIndex(3);
  }, [location.pathname]);
  return (
    <div className="App" id={dark ? "dark" : "light"} ref={initialHeight}>
      <Navigation index={index} setIndex={setIndex} />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects dark={dark} />} />
        <Route
          path="/education"
          element={
            <Education
              initialHeight={initialHeight?.current?.clientHeight - 174}
            />
          }
        />
        <Route path="/contact" element={<Contact dark={dark} />} />
      </Routes>
      <Footer dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
