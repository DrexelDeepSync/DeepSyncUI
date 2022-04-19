import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './FullNavbar.css';

export default class FullNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='sm'>
        <Navbar.Brand href="/">
          <img src="./images/DeepSync_logo.png" width="100px" height="100px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className="ms-auto"/>
        <Navbar.Collapse id='responsive-navbar-nav' className="ms-auto text-end">
          <Nav className="ms-auto">
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/getting-started'>Getting Started</Nav.Link>
            <Nav.Link href='/project-creation'>Project Creation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}