import { FaAngleDoubleUp } from "react-icons/fa";

function GoUp() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 1000,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--accent-color)',
                padding: '0.75rem',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
            <FaAngleDoubleUp size={24} />
        </div>
    );
}

export default GoUp;