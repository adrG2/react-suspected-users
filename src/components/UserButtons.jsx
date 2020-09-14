import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function UserButtons() {
  return (
    <Container>
     <Row>
        <Col> 
          <Button variant="info" size="sm">Seguro</Button>
        </Col>
        <Col>
          <Button variant="danger" size="sm">Eliminar</Button>
        </Col>
      </Row>
    </Container>
  );
}