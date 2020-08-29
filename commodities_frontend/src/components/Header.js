import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'

function Header () {
  const currentUser = localStorage.getItem('user')
  const handleSignOut = function(e) {
    e.preventDefault();
    axios({
      method: 'DELETE',
      url: 'http://localhost:3001/auth/sign_out',
      data: JSON.parse(localStorage.user)
    })
    .then(() => {
      localStorage.removeItem('user')
      window.location = '/'
    })
  }

  return (
    <div>
    <Navbar fixed="top" bg="dark" variant="dark" >
      <Navbar.Brand href="/">Commodities Marketplace</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      {currentUser ?
        <Nav>
          <Nav.Item><Navbar.Text>{JSON.parse(currentUser).uid}</Navbar.Text></Nav.Item>
          <Nav.Item><Nav.Link href="#" onClick={handleSignOut}>Sign out</Nav.Link></Nav.Item>
         </Nav> :
        <Nav>
          <Nav.Item><Nav.Link href="/signup">Signup</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
        </Nav>
      }
      </Navbar.Collapse>
    </Navbar>
    <br/><br/>
    </div>
  )
}

export default Header
