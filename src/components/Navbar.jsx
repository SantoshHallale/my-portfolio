import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import '../components/Navbar.css';
const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <nav className='navbar'>
        <Link to='/' className='nav-logo'>Santoshkumar</Link>
        <div className={`nav-links ${open ? "open" : ""}`}>
            <Link to='/' onClick={()=>setOpen(false)}>Home</Link>
            <Link to='/about' onClick={()=>setOpen(false)}>About</Link>
            <Link to='/skills' onClick={()=>setOpen(false)}>Skills</Link>
            <Link to='/projects' onClick={()=>setOpen(false)}>projects</Link>
            <Link to='/contact' onClick={()=>setOpen(false)}>Contact</Link>
            <a href="/resume.pdf" download>Resume</a>
        </div>
        <div className='hamburger' onClick={()=>setOpen(!open)}> ☰ </div>
    </nav>
  );
}

export default Navbar;