import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.navbar}>
            <a href='../pages/Home.jsx' className={styles.navbar__logo}>Mercy.dev</a>

            <nav className={`${styles.navbar__links} ${isOpen ? styles.open : ''}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </nav>

            <div className={styles.navbar__toggle} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </header>
    );
}

export default Navbar;