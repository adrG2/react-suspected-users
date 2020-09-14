import React from "react";
import User from './User';
import Col from 'react-bootstrap/Col'

export default function Users(props) {
  const users = props.users;
  return (
    users.map( (user) => {
      return(
        <Col>
          <User
              name={user.name} 
              confidence={user.confidence}
              image={user.image}
          />
        </Col>
      );
    })
  );
}