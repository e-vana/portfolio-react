import "../components/ProjectCard.css";
function ProjectCard(props) {
  return (
    <div className="project-card-container">
      <img src={props.image} alt={props.alt} className="image-container"></img>
      <h2>{props.title}</h2>
      <p>{props.para1}</p>
      <p>{props.para2}</p>
      <p>
        Check it out on <a href={props.github}>Github</a>{" "}
      </p>
      {props.deployed && (
        <p>
          {" "}
          Or deployed on Netlify <a href={props.deployed}>here</a>
        </p>
      )}
    </div>
  );
}

export default ProjectCard;
