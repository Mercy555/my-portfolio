import '../styles/ProjectModal.css';

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    const handleBackdropClick = (e) => {
        if (e.target.className === 'modal-backdrop') {
            onClose();
        }
    }

    return (
        <div className='modal-backdrop' onClick={handleBackdropClick}>
            <div className='modal black-glass'>
                <div className='modal__close' onClick={onClose}>x</div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className='modal__techs'>
                    {project.tech.map(tech =>
                        <div className='tech-card glass' key={tech.name}>
                            <span>{tech.icon}</span>
                            <span>{tech.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;