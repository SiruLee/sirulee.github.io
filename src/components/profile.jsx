import useMeasure from "react-use-measure";
import { createDomMotionComponent, motion } from "framer-motion";
import "../styles/profile.css";
import Dot from "./dot.jsx";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function min(x, y) {
  return x < y ? x : y;
}
function max(x, y) {
  return x > y ? x : y;
}

function Profile() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ref, nameInfo] = useMeasure();

  const techs = [
    "Computer Theory",
    "Software Engineering",
    "Artificial Intelligence",
    "Quantum Informatics",
  ];
  return (
    <div
      className="contents"
      id="profile"
      onMouseMove={({ clientX, clientY }) =>
        setCursor({ x: clientX, y: clientY })
      }
    >
      <div id="name" ref={ref}>
        <div
          style={{
            fontSize: max(
              min(
                Math.round(nameInfo["height"]) * 0.7,
                Math.round(nameInfo["width"]) * 0.15
              ),
              40
            ),
          }}
        >
          Jiheon Lee
        </div>
      </div>
      <div
        id="tech"
        style={{
          fontSize: max(
            min(
              ((Math.round(nameInfo["height"]) * 7) / 3 / techs.length) * 0.7,
              Math.round(nameInfo["width"]) * 0.08
            ),
            25
          ),
        }}
      >
        <div id="techWrapper">
          {techs.map((v, idx) => (
            <motion.div
              key={idx}
              animate={{ opacity: 0.3 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * (2.5 - 1) + 1,
                delay: Math.random() * (2.5 - 1) + 1,
              }}
            >
              {v + " <"}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
