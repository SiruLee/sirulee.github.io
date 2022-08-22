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
import { AnimatePresence, motion } from "framer-motion";
var initialDark = false;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  initialDark = true;
} else {
  initialDark = false;
}
var initialIndex = parseInt(sessionStorage.getItem("index")) || 0;
function App() {
  const [index, setIndex] = useState(initialIndex);
  const [dark, setDark] = useState(initialDark);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      setDark(event.matches ? true : false);
    });
  const initialHeight = useRef();
  let loc = useLocation();
  useEffect(() => {
    if (loc.pathname == "/" || loc.pathname == "/profile") {
      setIndex(0);
    } else if (loc.pathname == "/projects") {
      setIndex(1);
    } else if (loc.pathname == "/education") {
      setIndex(2);
    } else if (loc.pathname == "/contact") {
      setIndex(3);
    }
  }, [loc.pathname]);

  return (
    <div className="App" id={dark ? "dark" : "light"} ref={initialHeight}>
      <Navigation index={index} setIndex={setIndex} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={loc} key={loc.pathname}>
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
      </AnimatePresence>
      <Footer dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
