import "../styles/contact.css";
import useMeasure from "react-use-measure";
import { motion, useDragControls } from "framer-motion";
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
  const [dotSize, setDotSize] = useState(1);
  const [blur, setBlur] = useState(8);
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
          setBlur(8 - min(8, Math.sqrt(dragAmount) / 1.7));
          setDotSize(min(200, Math.pow(dragAmount, 1 / 1.4)));
        }}
        onDragEnd={() => {
          setRelease(true);
          setBlur(8);
          var counter = dotSize;
          var decre;
          var x = 1;
          var interval = setInterval(() => {
            setDotSize(counter);
            decre = Math.pow(dotSize, 1.03) / 4 / Math.pow(x, 1.1);
            counter -= decre;
            x++;
            if (counter <= 1) {
              setDotSize(1);
              clearInterval(interval);
            }
          }, 10);
        }}
        id="draggable"
      ></motion.div>
      <div
        id="blinder"
        style={{
          transition: release ? "1s ease" : "",
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          backgroundImage: dark
            ? `radial-gradient(rgba(0, 0, 0, 0) 2px, #292929 ${dotSize}px)`
            : `radial-gradient(rgba(0, 0, 0, 0) 2px, white ${dotSize}px)`,
        }}
      ></div>
      <div id="contact" ref={ref}>
        <div
          id="gh"
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
