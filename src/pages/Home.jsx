import React from 'react';
import {motion} from 'framer-motion';
import './Home.css';
const Home = () => {
  return (
    <motion.div
    className='home-container'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    >
        <div>
            <h1>Hello, I'am <span>Santoshkumar</span></h1>
            <p>Java Full Stack Developer | React.js | Spring Boot | Microservices</p>

            <div className='home-buttons'>
                <a href="/resume.pdf" download className='btn-primary'>Download CV</a>
                <a href="/projects" className='btn-secondary'>My Projects</a>
            </div>

            <p className='contact-info'>
                📧 santoshrh.1110@gamil.com  📞 +91 9036791636
            </p>
        </div>
        <motion.img
        src='/images/santosh.jpeg'
        alt='profile'
        className='profile-img'
        whileHover={{scale:1.05}}
        />
    </motion.div>
  )
}

export default Home
