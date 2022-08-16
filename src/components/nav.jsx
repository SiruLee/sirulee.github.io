import "../styles/nav.css";
import { Link } from "react-router-dom";
function Navigation({ index, setIndex }) {
  return (
    <div id="nav">
      <div id="border"></div>
      <div id="navlist">
        <Link
          to="/profile"
          className={index == 0 ? "active" : "inactive"}
          onClick={() => {
            setIndex(0);
            localStorage.setItem("index", "0");
          }}
        >
          <div>PROFILE</div>
        </Link>
        <Link
          to="/projects"
          className={index == 1 ? "active" : "inactive"}
          onClick={() => {
            setIndex(1);
            localStorage.setItem("index", "1");
          }}
        >
          <div>PROJECTS</div>
        </Link>
        <Link
          to="/education"
          className={index == 2 ? "active" : "inactive"}
          onClick={() => {
            setIndex(2);
            localStorage.setItem("index", "2");
          }}
        >
          <div>EDUCATION</div>
        </Link>
        <Link
          to="/contact"
          className={index == 3 ? "active" : "inactive"}
          onClick={() => {
            setIndex(3);
            localStorage.setItem("index", "3");
          }}
        >
          <div>CONTACT</div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
