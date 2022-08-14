import "../styles/contact.css";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { useState } from "react";
const min = (x, y) => {
  return x > y ? y : x;
};
const max = (x, y) => {
  return x > y ? x : y;
};
function Contact({ dark }) {
  const dragControls = useDragControls();

  function startDrag(event) {
    dragControls.start(event, { snapToCursor: true });
    setPointer({ x: event.clientX, y: event.clientY });
  }

  const [ref, contactInfo] = useMeasure();
  const [release, setRelease] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [dragAmount, setDragAmount] = useState(0);
  const [dotSize, setDotSize] = useState(2);
  const [blur, setBlur] = useState(10);
  return (
    <div className="contents" onPointerDown={startDrag}>
      <motion.div
        drag
        dragConstraints={{
          left: pointer.x,
          right: pointer.x,
          top: pointer.y - 87,
          bottom: pointer.y - 87,
        }}
        dragElastic={0.1}
        dragControls={dragControls}
        onDragStart={() => {
          setRelease(false);
        }}
        onDrag={(event, info) => {
          setDragAmount(
            Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
          );
          setBlur(10 - min(10, Math.sqrt(dragAmount) / 1.5));
          setDotSize(min(15, Math.pow(dragAmount, 0.8) / 8 + 2));
        }}
        onDragEnd={() => {
          setRelease(true);
          setBlur(10);
          var counter = dotSize;
          var decre;
          var x = 1;
          var interval = setInterval(() => {
            setDotSize(counter);
            decre = Math.pow(dotSize, 1.01) / 7 / Math.pow(x, 1 / 1.2);
            counter -= decre;
            x++;
            if (counter <= 2) {
              setDotSize(2);
              setRelease(false);
              clearInterval(interval);
            }
          }, 10);
        }}
        id="draggable"
      ></motion.div>
      <div id="contact" ref={ref}>
        <AnimatePresence exitBeforeEnter>
          {dark && (
            <motion.div
              key="dark-blinder"
              id="dark-blinder"
              className="blinder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              style={{
                transition: release ? "1s ease" : "",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0) ${dotSize}px, #292929 1px)`,
                zIndex: dark ? 4 : 2,
              }}
            ></motion.div>
          )}
          {!dark && (
            <motion.div
              key="light-blinder"
              id="light-blinder"
              className="blinder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              style={{
                transition: release ? "1s ease" : "",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0) ${dotSize}px, white 1px)`,
                zIndex: dark ? 2 : 4,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div
          id="gh"
          className="contactContent"
          style={{
            fontSize: min(
              contactInfo["height"] * 0.2,
              contactInfo["width"] * 0.06
            ),
          }}
        >
          https://github.com/SiruLee
        </div>

        <div
          id="email"
          className="contactContent"
          style={{
            fontSize: min(
              contactInfo["height"] * 0.2,
              contactInfo["width"] * 0.06
            ),
          }}
        >
          jhlee520801@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
