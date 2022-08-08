import "../styles/footer.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Footer({ dark, setDark }) {
  const [onHover, setonHover] = useState(false);
  const [active, setActive] = useState(true);
  return (
    <div id="footer">
      <div className="fborder"></div>
      <motion.div
        onHoverStart={(e) => {
          setonHover(true);
        }}
        onHoverEnd={(e) => {
          setonHover(false);
        }}
        onClick={() => {
          if (active) {
            setDark((curr) => !curr);
            setActive(false);
          }
        }}
        id="color-mode"
      >
        <AnimatePresence onExitComplete={() => setActive(true)}>
          {dark && (
            <motion.div
              key="light-filling"
              initial={{ x: onHover ? -20 : -5 }}
              animate={{ x: 0 }}
              exit={{ x: 20 }}
              transition={{ x: { duration: 0.2 } }}
              id={onHover ? "light-hover-filling" : "light-rest-filling"}
              className="light-themeCover"
            ></motion.div>
          )}
          {!dark && (
            <motion.div
              key="dark-filling"
              initial={{ x: onHover ? -20 : -5 }}
              animate={{ x: 0 }}
              exit={{ x: 20 }}
              transition={{ x: { duration: 0.2 } }}
              id={onHover ? "dark-hover-filling" : "dark-rest-filling"}
              className="dark-themeCover"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="fborder"></div>
    </div>
  );
}

export default Footer;
