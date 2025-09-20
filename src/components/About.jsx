import { BiPlanet } from 'react-icons/bi';
import { FaBook, FaBookOpen, FaCode, FaFilm, FaPencilAlt } from 'react-icons/fa';
import { GiSprout } from 'react-icons/gi';
import '../styles/About.css';

const education = [
    {
        qualification: 'MSc CS',
        institution: 'Michael Job College of Arts and Science for Women, Sulur',
        uni_board: 'Bharathiar University',
        yop: 'Ongoing',
        percentage: '--'
    },
    {
        qualification: 'BCA',
        institution: 'Michael Job College of Arts and Science for Women, Sulur',
        uni_board: 'Bharathiar University',
        yop: '2025',
        percentage: '89% (5 semesters)',
    },
    {
        qualification: '12th',
        institution: 'St. Joseph\'s Girls Hr. Sec. School, Somanur',
        uni_board: 'TN State Board',
        yop: '2022',
        percentage: '95%'
    },
    {
        qualification: '10th',
        institution: 'St. Joseph\'s Girls Hr. Sec. School, Somanur',
        uni_board: 'TN State Board',
        yop: '2020',
        percentage: '79%'
    }
];

const interests = [
    { name: 'Coding', icon: <FaCode />},
    { name: 'Reading', icon: <FaBookOpen />},
    { name: 'English', icon: <FaBook />},
    { name: 'Self-Development', icon: <GiSprout />},
    { name: 'Space', icon: <BiPlanet />},
    { name: 'Movies', icon: <FaFilm />},
    { name: 'Journaling', icon: <FaPencilAlt />}
];

function IntCardGrid({ interests }) {
    return (
        <div className='grid-container'>
            {interests.map(item => (
                <div className='card' key={item.name}>
                    <span className='icon'>{item.icon}</span>
                    <span className='name'>{item.name}</span>
                </div>
            ))}
        </div>
    );
}

function EduCardGrid({ education }) {
    return (
        <div className='grid-container'>
            {education.map(item => (
                <div className='card' key={item.qualification}>
                    <h4>{item.qualification}</h4>
                    <h5>{item.institution}</h5>
                    <p style={{color: 'var(--accent-hover)'}}>{item.uni_board}</p>
                    <p>
                        <strong>Year of Passing:</strong> <span style={{color: 'var(--accent-color)'}}>{item.yop}</span>
                    </p>
                    <p>
                        <strong>Percentage:</strong> <span style={{color: 'var(--accent-color)'}}>{item.percentage}</span>
                    </p>
                </div>
            ))
            }
        </div>
    );
}

function About() {
    return (
        <section className='about' id='about'>
            <div className='about__container'>
                <h2 className='about__section-title'>About Me</h2>

                <div className='about__summary'>
                    <p>
                        I'm a passionate front-end developer with a love for clean code, sleek UI, and creating meaningful user experiences. Currently pursuing my MSc in Computer Science, I’ve been building projects that blend creativity with functionality.
                    </p>
                </div>

                <div className='about__education'>
                    <h3>Education</h3>
                    <EduCardGrid education={education} />
                </div>

                <div className='about__interests'>
                    <h3>Interests</h3>
                    <IntCardGrid interests={interests} />
                </div>
            </div>
        </section>
    );
}

export default About;