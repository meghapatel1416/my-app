import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//Ecommerce




export const Props = (p) => {
  return (
    
    
      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={p.img} />
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <Card.Text>
              {p.des}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    

  )
}
