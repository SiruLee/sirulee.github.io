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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="contents"
      id="profile"
    >
      <div className="light-gradient"></div>
      <div className="dark-gradient"></div>
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
    </motion.div>
  );
}

export default Profile;
