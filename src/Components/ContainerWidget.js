import React from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function ContainerWidget() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/200x100" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>This is a wider card with</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default ContainerWidget;
