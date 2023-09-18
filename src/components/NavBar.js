import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import './Navbar_style.css';

const NavBar = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
  const [showNavBar, setShowNavBar] = useState(isHomePage);

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
    setShowNavBar(location.pathname === "/");
  }, [location.pathname]);

  return (
    <div 
      className={isHomePage ? 'navbar-container' : 'navbar-container hidden-navbar'} 
      onMouseOver={() => !isHomePage && setShowNavBar(true)}
      onMouseLeave={() => !isHomePage && setShowNavBar(false)}
    >
        { !showNavBar && <div className="navbar-tab" onMouseOver={() => setShowNavBar(true)}>Show Navbar</div> }
        { showNavBar && <Navbar expand="lg" className="navbar-3d">
        <Container>
          <Navbar.Brand href="/">LiveCodeSync</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='tog' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/CodeComplier" className='link'>Complier</Nav.Link>
              <Nav.Link href="/CodeRoom" className='link'>CodeRoom</Nav.Link>
              <Nav.Link href="/WebDevEnvironment" className='link'>WebDev</Nav.Link>
              <Nav.Link href="/About" className='link'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>}
    </div>
  );
}

export default NavBar;
