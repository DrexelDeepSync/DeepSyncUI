import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src="./images/DeepSync_logo.png" width="100px" height="100px"></img>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            DeepSync
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link id='about' to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                id = 'getting-started'
                to='/getting-started'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Getting Started
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                id = 'project-creation'
                to='/project-creation'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Project Creation
              </Link>
            </li>
            <li>
              <Link
                to='/log-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}

          {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;