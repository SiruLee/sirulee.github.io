import "../styles/footer.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Footer({ dark, setDark }) {
  const [onHover, setonHover] = useState(false);
  const [active, setActive] = useState(true);
  var mobile = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    mobile = true;
  }
  const variants = {
    enter: () => {
      return mobile ? {} : { x: onHover ? -20 : -5 };
    },
    center: mobile ? {} : { x: 0 },
    exit: () => {
      return mobile ? {} : { x: 20 };
    },
  };
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
            setActive(false);
            setDark((curr) => !curr);
          }
        }}
        id={mobile ? "mobile-color-mode" : "color-mode"}
        className="color-mode"
      >
        <AnimatePresence onExitComplete={() => setActive(true)}>
          {dark && (
            <motion.div
              key="light-filling"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { duration: 0.2 } }}
              id={onHover ? "light-hover-filling" : "light-rest-filling"}
              className="light-themeCover"
            ></motion.div>
          )}
          {!dark && (
            <motion.div
              key="dark-filling"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { duration: 0.2 } }}
              id={onHover ? "dark-hover-filling" : "dark-rest-filling"}
              className="dark-themeCover"
            ></motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="fborder"></div>
      {mobile ? (
        <div id="mobileMessage">
          Please use a desktop for the best experience
        </div>
      ) : null}
    </div>
  );
}

export default Footer;
