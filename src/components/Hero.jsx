import '../styles/Hero.css';

function Hero() {
    return (
        <section className='hero' id='home'>
            <div className='hero__content hero__glass'>
                <h1>Hello, I'm <span>Mercy</span></h1>
                <h2>Front-End Developer</h2>
                <p>I craft responsive websites with clean code</p>
                <a href="#projects" className='hero__btn'>View Projects</a>
            </div>
        </section>
    );
}

export default Hero;