import React from 'react';

import Users from 'features/user/Users';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  return (
    <Container>
      <Row fluid="sm">
        <Col>
          <h1>Users posts</h1>
          <Users />
        </Col>
      </Row>
    </Container>
  );
}
