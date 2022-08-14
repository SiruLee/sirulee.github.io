import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/profile.css";
function min(x, y) {
  return x < y ? x : y;
}
function max(x, y) {
  return x > y ? x : y;
}

function Profile() {
  const [ref, nameInfo] = useMeasure();

  const techs = [
    "Computer Theory",
    "Software Engineering",
    "Artificial Intelligence",
    "Quantum Informatics",
  ];
  return (
    <div className="contents" id="profile">
      <div id="light-profile"></div>
      <div id="dark-profile"></div>
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
