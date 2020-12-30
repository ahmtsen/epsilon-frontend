import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'
const NavbarComp = () => {
  const userContext = useContext(UserContext)

  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand aria-disabled='true'>Epsilon</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {userContext.isLoggedIn && (
            <>
              <Nav className='mr-auto'>
                <Nav.Item>
                  <Link to='/symptoms'>Symptoms</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='/questionnaire'>Questionnaire</Link>
                </Nav.Item>
              </Nav>
              <Nav.Item onClick={() => userContext.setIsLoggedIn(false)}>
                <Link>Log Out</Link>
              </Nav.Item>
            </>
          )}
          {!userContext.isLoggedIn && (
            <>
              <Nav.Item>
                <Link to='/login'>Log In</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/signup'>Sign Up</Link>
              </Nav.Item>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComp
