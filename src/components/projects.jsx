import "../styles/projects.css";
import { ProjectData } from "./projectData.js";
import ProjectContent from "./projectContent.jsx";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Project({ scrollXProgress, order, dark }) {
  var o = Math.pow(1.2, 1 / (1 + 2 * Math.pow(scrollXProgress - order, 2)));
  const [hover, setHover] = useState(false);
  return (
    <AnimatePresence>
      {!hover && (
        <motion.div
          initital={{ scale: o + 0.08 }}
          animate={{ scale: o }}
          exit={{ scale: o + 0.08 }}
          style={{
            scale: o,
            boxShadow: dark
              ? `rgba(0, 9, 19, 0.4) 0px 20px ${Math.pow(o, 10) + 30}px ${
                  Math.pow(o, 15) - 10
                }px`
              : `rgba(38, 57, 77, 0.5) 0px 20px ${Math.pow(o, 10) + 30}px ${
                  Math.pow(o, 15) - 10
                }px`,
            backgroundColor: `${ProjectData[order].color}`,
          }}
          className="projectFrame"
          onHoverStart={() => setHover(true)}
        >
          <ProjectContent data={ProjectData[order]} />
        </motion.div>
      )}
      {hover && (
        <motion.div
          initital={{ scale: o }}
          animate={{ scale: o + 0.05 }}
          exit={{ scale: o }}
          style={{
            scale: o + 0.05,
            boxShadow: dark
              ? `rgba(0, 9, 19, 0.45) 0px 20px ${Math.pow(o, 10) + 30}px ${
                  Math.pow(o, 15) - 10
                }px`
              : `rgba(38, 57, 77, 0.55) 0px 20px ${Math.pow(o, 10) + 30}px ${
                  Math.pow(o, 15) - 10
                }px`,
            backgroundColor: `${ProjectData[order].color}`,
          }}
          className="projectFrame"
          onHoverEnd={() => setHover(false)}
        >
          <ProjectContent data={ProjectData[order]} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function Projects({ dark }) {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    return scrollXProgress.onChange((latest) => {
      setScroll(latest);
    });
  }, []);
  return (
    <div className="contents" id="projects">
      <div id="scrollContainer" ref={scrollRef}>
        <div className="space" style={{ marginRight: "-5vw" }}></div>
        {Array.from({ length: ProjectData.length }).map((_, i) => (
          <Project
            key={i}
            scrollXProgress={scroll * (ProjectData.length - 1)}
            order={i}
            dark={dark}
          />
        ))}
        <div className="space" style={{ marginLeft: "-5vw" }}></div>
      </div>
      <div className="light-gradient"></div>
      <div className="dark-gradient"></div>
    </div>
  );
}

export default Projects;
