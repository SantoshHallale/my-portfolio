import React from 'react'
import '../components/Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <div className='footer-section'>
                <h3>Santoshkumar</h3>
                <p>Java Full Stack Developer</p>
            </div>
            <div className='footer-section'>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className='footer-section'>
                <h4>Contact</h4>
                <p>Email : santoshrh.1110@gmail.com</p>
                <p>Phone : +91 9036791636</p>
            </div>
        </div>
        <p className='footer-bottom'>
            © {new Date().getFullYear()} Santoshkumar - All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer;
