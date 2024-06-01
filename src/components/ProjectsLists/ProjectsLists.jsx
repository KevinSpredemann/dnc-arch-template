import './ProjectsLists.css';
import StarFilled from '../../assets/star-filled.svg';
import StarOutline from '../../assets/star-outline.svg';

const projects = [
  { title: 'Project 1', description: 'Description of Project 1' },
  { title: 'Project 2', description: 'Description of Project 2' },
  { title: 'Project 3', description: 'Description of Project 3' },
  { title: 'Project 4', description: 'Description of Project 4' },
  { title: 'Project 5', description: 'Description of Project 5' },
  { title: 'Project 6', description: 'Description of Project 6' },
  { title: 'Project 7', description: 'Description of Project 7' },
  { title: 'Project 8', description: 'Description of Project 8' },
];

const ProjectsLists = () => {
  return (
    <div className="projects-section">
        <div className="projects-hero">
            <h2>Follow Our Projects</h2>
            <p className="grey-1-color">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src="/hero-bg.jpg" alt={project.title} />
                    <h3>{project.title}</h3>
                    <p className="grey-1-color">{project.description}</p>
                    <img src={StarFilled} alt="star" height="20px" />
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProjectsLists;