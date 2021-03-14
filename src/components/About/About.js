import "./About.css";
import people from "./data";

const AboutCard = ({ person }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="aboutcard">
        <img src={person.image} alt="Chintubot" title={person.name}></img>
        <div className="name">{person.name}</div>
        <div className="socialmedia">
          <a title="Github profile Link" target="blank" href={person.github}>
            <i className="fab fa-github"></i>
          </a>
          <a
            title="Instagram profile link"
            target="blank"
            href={person.instagram}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            title="linkedin profile link"
            target="blank"
            href={person.linkedin}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className="container">
      <div className="row about">
        {people.map((person, index) => {
          return <AboutCard person={person} key={index} />;
        })}
      </div>
    </div>
  );
};
export default About;
