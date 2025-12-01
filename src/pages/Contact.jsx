import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows={5}></textarea>
        <button type="submit">Send</button>
      </form>

      <div className="contact-details">

        {/* CLICKABLE EMAIL */}
        <p>
          📧 Email: 
          <a href="mailto:santoshrh.1110@gmail.com"> santoshrh.1110@gmail.com</a>
        </p>

        {/* CLICKABLE PHONE */}
        <p>
          📞 Phone: 
          <a href="tel:+919036791636"> +91 9036791636</a>
        </p>

        <p>🌍 Location: India</p>

        {/* SOCIAL LINKS */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/santoshkumar-hallale-94a511380" 
             target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/SantoshHallale"
             target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://x.com/santosh04831838?t=qmemcHabkuzfYSGnb8dMyw&s=09"
             target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
