import React from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import ButtonLightDarkMode from '../buttons/ButtonLightDarkMode/ButtonLightDarkMode'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return (
    <nav className='navbar'>
        <img src="" alt="" />
        <ul>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/" className="nav-link">Teste1</NavLink>
            <NavLink to="/" className="nav-link">Teste2</NavLink>
            <NavLink to="/" className="nav-link">Teste3</NavLink>
            <NavLink to="/" className="nav-link">Teste4</NavLink>
        </ul>
        <ButtonLightDarkMode 
          isChecked={isDarkMode} 
          onToggle={handleToggleTheme}/>
    </nav>
  )
}

export default Navbar