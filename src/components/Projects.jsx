import {useState } from 'react';
import ProjectModal from './ProjectModal.jsx';
import '../styles/Projects.css';

/* Icons import */
import { FaCss3, FaEye, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

/* Images import */
import portfolioImg from '../assets/my-portfolio-mockup-1.PNG';
import weatherAppImg from '../assets/weather-app-mockup-1.PNG';

const projects = [
    {
        id: uuidv4(),
        title: 'Interactive Weather Dashboard',
        description: 'Developed a responsive web application with HTML, CSS, and JavaScript to display real-time weather information. Integrated the OpenWeatherMap API to fetch and process data, implementing core logic for temperature conversion and dynamic UI updates.',
        tech: [
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3 /> },
            { name: 'JavaScript', icon: <FaJs /> }
        ],
        image: weatherAppImg,
        gitHubLink: 'https://github.com/Mercy555/Weather-App'
    },
    {
        id: uuidv4(),
        title: 'Portfolio Website (React + Vite) — Ongoing',
        description: 'Building a fully responsive, visually modern portfolio using React and Vite, showcasing front-end skills and personal projects. Using modular components, CSS variables, and accessible semantic HTML to create a smooth user experience. Designing and implementing custom styling (dark mode, glassmorphism), scroll navigation, and interaction animations for an engaging UI.',
        tech: [
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3 /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'Vite', icon: <SiVite /> }
        ],
        image: portfolioImg,
        gitHubLink: 'https://github.com/Mercy555/my-portfolio'
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    
 
    return (
        <section className='projects' id='projects'>
            <h2 className='projects__section-title'>Projects</h2>
            <div className='projects__container'>
                {projects.map(project =>
                    <div className='card glass' key={project.id}>
                        <img src={project.image} alt={`${project.title} Preview`} />
                        <p>{project.title}</p>
                        <span className='details-btn' onClick={() => openModal(project)}><FaEye /></span>
                    </div>
                )}
            </div>

            {/* Project Modal Popup */}
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </section>
    );
}

export default Projects;