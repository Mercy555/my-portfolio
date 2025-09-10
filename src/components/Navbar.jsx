import { useState } from 'react';
import '../styles/Navbar.css'; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="navbar">
            <a href="#home" className="navbar__logo">Mercy.dev</a>

            <nav className={`navbar__links ${isOpen ? 'open' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </nav>

            <div className="navbar__toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Navbar;