import React from "react";
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="react-iconscout"
          src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Text>
          Lista de usuarios sospechosos
        </Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Admin</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}