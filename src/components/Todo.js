import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Todo(props) {
function buttonDone(){
    props.toDone(props.id);
  }  
  return (
    <Container className="todo" id={props.id}>
      <Row>
        <h3>{props.name}</h3>
      </Row>
      <Row>
        <p>{props.tags}</p>
      </Row>
      <Row>
        <p>{props.description}</p>
      </Row>
      <Row>
        <Col></Col><Col></Col>
        <Col>
        <Button variant="success" onClick={buttonDone} className="toDone">Done</Button>
        </Col>
      </Row>
    </Container>
  );
}

