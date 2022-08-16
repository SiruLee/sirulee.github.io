function ProjectContent({ data }) {
  return (
    <a className="projectLink" href={`${data.a}`} target="_black">
      <div className="projectContent">
        <div className="projectName">{data.name}</div>
        <div className="projectType">{data.type}</div>
        <div className="hline"></div>
        <div className="projectDate">{data.date}</div>
        <div className="projectDescription">{data.description}</div>
        <div className="projectLang">
          {data.language.map((_, i) => (
            <div key={i}>{_}</div>
          ))}
        </div>
      </div>
    </a>
  );
}
export default ProjectContent;
