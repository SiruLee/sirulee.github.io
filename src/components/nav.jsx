import "../styles/nav.css";
function Navigation({ index, setIndex }) {
  return (
    <div id="nav">
      <div id="border"></div>
      <div id="navlist">
        <div
          className={index == 0 ? "active" : "inactive"}
          onClick={() => setIndex(0)}
        >
          PROFILE
        </div>
        <div
          className={index == 1 ? "active" : "inactive"}
          onClick={() => setIndex(1)}
        >
          PROJECTS
        </div>
        <div
          className={index == 2 ? "active" : "inactive"}
          onClick={() => setIndex(2)}
        >
          EDUCATION
        </div>
        <div
          className={index == 3 ? "active" : "inactive"}
          onClick={() => setIndex(3)}
        >
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Navigation;
