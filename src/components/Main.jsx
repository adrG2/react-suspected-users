import React from "react";
import Users from './Users';
import fetchUsers from '../data.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users = {}
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Users users={fetchUsers()} />
        </Row>
      </Container>
    );
  }


}