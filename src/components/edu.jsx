import "../styles/education.css";
import useMeasure from "react-use-measure";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const EduItem = ({
  height,
  width,
  i,
  city,
  expanded,
  setExpanded,
  folded,
  setFolded,
  n,
  resized,
}) => {
  var detail = [
    {
      name: "University of Toronto",
      degree: "Honours Bachelor of Science (HBSc)",
      program: "Computer Science Specialist & Physics Major",
      period: "2021 ~ CURRENT",
      gpa: ["4.0", "4.0"],
    },
    {},
    {},
  ];
  var isExpanded = i === expanded;
  var zdx = 0;
  if (i === folded) {
    zdx = 1;
  } else if (i === expanded) {
    zdx = 2;
  }
  return (
    <div
      className="eduPlace"
      id={resized ? "suppressed" : ""}
      style={{
        borderTop: i === 0 ? "0" : "",
        borderBottom: i === n - 1 ? "0" : "",
        height: isExpanded ? "calc(100% + 3px)" : i === 0 ? height : height - 3,
        top: isExpanded ? -3 : i * height,
        zIndex: zdx,
      }}
      onClick={() => {
        if (city !== "? ? ?") {
          if (isExpanded) {
            setExpanded(-1);
            setFolded(i);
          } else {
            setExpanded(i);
          }
        }
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {!isExpanded && (
          <motion.div
            key="city"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="city"
            style={{ fontSize: min(height, width) }}
          >
            {city}
          </motion.div>
        )}
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id="detail"
          >
            <div
              id="institution"
              style={{ fontSize: min(height * 0.8, width * 1.3) * 0.8 * 0.7 }}
            >
              {detail[i].name}
            </div>
            <div
              id="degree"
              style={{ fontSize: min(height * 0.7, width) * 0.8 * 0.4 }}
            >
              {detail[i].degree}
            </div>
            <div
              id="program"
              style={{ fontSize: min(height * 0.7, width) * 0.8 * 0.4 }}
            >
              {detail[i].program}
            </div>
            <div
              id="period"
              style={{ fontSize: min(height * 0.7, width) * 0.8 * 0.35 }}
            >
              {detail[i].period}
            </div>
            <div
              id="gpa"
              style={{ fontSize: min(height * 0.7, width) * 0.8 * 0.35 }}
            >
              GPA : {detail[i].gpa[0]}
              <p
                id="maxgpa"
                style={{ fontSize: min(height * 0.7, width) * 0.7 * 0.3 }}
              >
                /{detail[i].gpa[1]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
function min(x, y) {
  return x < y ? x : y;
}
function Education({ initialHeight }) {
  const [resized, setResized] = useState(false);
  function resizedw() {
    setResized(false);
  }

  var doit;
  window.onresize = function () {
    setResized(true);
    clearTimeout(doit);
    doit = setTimeout(resizedw, 100);
  };
  const [folded, setFolded] = useState(-1);
  const [expanded, setExpanded] = useState(-1);
  const listId = [0, 1, 2];
  const city = ["T O R O N T O", "? ? ?", "? ? ?"];
  const [ref, eduInfo] = useMeasure();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="contents"
      id="education"
      ref={ref}
    >
      <div className="light-gradient"></div>
      <div className="dark-gradient"></div>
      {listId.map((i) => (
        <EduItem
          key={i}
          height={(eduInfo["height"] || initialHeight) / listId.length}
          width={eduInfo["width"] * 0.12}
          i={i}
          city={city[i]}
          expanded={expanded}
          setExpanded={setExpanded}
          folded={folded}
          setFolded={setFolded}
          n={listId.length}
          resized={resized}
        />
      ))}
    </motion.div>
  );
}

export default Education;
