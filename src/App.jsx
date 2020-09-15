import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Users from './components/Users';
import Main from './components/Main';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

