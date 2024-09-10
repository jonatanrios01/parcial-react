import React from 'react'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/logo.png'

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
          <Nav.Link >
            <img 
            src={logo} 
            alt="logo"
            style={{width:50,height:50}}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="computer">Computer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="laptop">Laptop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="login">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;