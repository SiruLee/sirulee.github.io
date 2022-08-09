import { addScaleCorrector } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../styles/dot.css";
function max(x, y) {
  return x > y ? x : y;
}
function Dot({ cursor }) {
  const ref = useRef(null);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    setDist(
      Math.sqrt(
        Math.pow(ref.current.offsetLeft + 2.5 - cursor.x, 2) +
          Math.pow(ref.current.offsetTop + 86.5 - cursor.y, 2)
      )
    );
  }, [cursor]);
  return (
    <div className="dot" ref={ref}>
      <div
        style={{
          transform: `scale(${max(
            0.2 * (10 - Math.pow(dist, 1 / 2.5)),
            1.01
          )})`,
          opacity: `${0.1 * (10 - Math.pow(dist, 1 / 2))}`,
        }}
        className="circle"
      ></div>
    </div>
  );
}
export default Dot;
