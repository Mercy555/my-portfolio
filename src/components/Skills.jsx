import React from 'react';

import '../styles/Skills.css';
// Used "devicons" for some icons here. The link is in index.html's header

//icon imports
import { FaGlobe, FaHourglassHalf, FaPuzzlePiece, FaSearch, FaSyncAlt } from 'react-icons/fa';
import { PiMicrosoftExcelLogoFill, PiMicrosoftPowerpointLogoFill, PiMicrosoftWordLogoFill } from "react-icons/pi";
import { RiLayout2Fill, RiSpeakFill } from 'react-icons/ri';
import { SiGooglesheets, SiGoogleslides, SiGoogledocs } from "react-icons/si";
import { MdPeople } from 'react-icons/md';
import PythonLogo from '../assets/python-logo-only.svg';

// Arrays for Skill Categories
const langAndWeb = [
    {
        categoryName: 'Languages & Web',
        skills: [
            { name: 'HTML', icon: 'devicon-html5-plain' },
            { name: 'CSS', icon: 'devicon-css3-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'React', icon: 'devicon-react-plain' },
            { name: 'Python', icon: <img src={PythonLogo} alt='Python' className='python-icon' /> },
            { name: 'C', icon: 'devicon-c-plain' },
            { name: 'Responsive Web Design', icon: <RiLayout2Fill style={{color: '#2B579A'}} /> },
            { name: 'Internet Fundamentals', icon: <FaGlobe style={{color: 'skyBlue'}} /> }
        ]
    }
];

const toolsAndTechs = [
    {
        categoryName: 'Tools & Technologies',
        skills: [
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'GitHub', icon: 'devicon-github-plain' },
            { name: 'Ms Word', icon: <PiMicrosoftWordLogoFill style={{color: '#2B579A'}} /> },
            { name: 'Ms Excel', icon: <PiMicrosoftExcelLogoFill style={{color: '#217346'}} /> },
            { name: 'Ms PowerPoint', icon: <PiMicrosoftPowerpointLogoFill style={{color: '#D24726'}} /> },
            { name: 'Google Docs', icon: <SiGoogledocs style={{color: '#4285F4'}} /> },
            { name: 'Google Sheets', icon: <SiGooglesheets style={{color: '#0F9D58'}} /> },
            { name: 'Google Slides', icon: <SiGoogleslides style={{color: '#F4B400'}} /> },
            { name: 'Canva', icon: 'devicon-canva-plain' }
        ]
    }
];

const softSkills = [
    {
        categoryName: 'Soft Skills',
        skills: [
            { name: 'Time Management', icon: <FaHourglassHalf style={{color: '#F2C94C'}} /> },
            { name: 'Attention to Detail', icon: <FaSearch style={{color: '#56CCF2'}} /> },
            { name: 'Communication', icon: <RiSpeakFill style={{color: '#9B51E0'}} /> },
            { name: 'Team Collaboration', icon: <MdPeople style={{color: '#27AE60'}} /> },
            { name: 'Problem Solving', icon: <FaPuzzlePiece style={{color: '#EB5757'}} /> },
            { name: 'Adaptability', icon: <FaSyncAlt style={{color: '#F2994A'}} /> }
        ]
    }
];

// Combaining all Skill Categories into one Array
const skillCategories = [
    ...langAndWeb,
    ...toolsAndTechs,
    ...softSkills
];

const renderIcon = (icon) => {
    console.log('redering icon:', icon);
    //If the icon is a React component
    if (React.isValidElement(icon)) return icon;

    //For devicon
    return <i className={`${icon} ${icon.includes('original') ? '' : 'colored'}`}></i>;
};

function Skills() {
    return (
        <section className='skills' id='skills'>
            <h2 className='skills__section-title'>Skills</h2>
            {skillCategories.map(category => (
                <div className='category' key={category.categoryName}>
                    <h4>{category.categoryName}</h4>
                    <div className='skill-orbs'>
                        {category.skills.map(skill => (
                            <div className='orb' key={skill.name}>
                                {renderIcon(skill.icon)}
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Skills;