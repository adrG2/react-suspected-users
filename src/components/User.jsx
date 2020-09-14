import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UserButtons from './UserButtons';

export default function User(props) {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Se ha calculado una confianza del {props.confidence}. ¿Qué desea hacer?
        </Card.Text>
        <UserButtons/>
      </Card.Body>
    </Card>
  )
}