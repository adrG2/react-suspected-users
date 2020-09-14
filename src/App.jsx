import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function App() {
  return (
    <Container>
      <Row>
        <Users users={users} />
      </Row>
    </Container>
  );
}

const users = [
  {
    id: '1',
    name: 'AntonioRR23',
    confidence: "65.3%",
    image: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
  },
  {
    id: '2',
    name: 'Mike43',
    confidence: '40%',
    image: 'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
  }
]